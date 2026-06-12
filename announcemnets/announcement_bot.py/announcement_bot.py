```python
import os
import discord
from discord.ext import commands

# Bot Setup
intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix="!", intents=intents)

# When Bot Starts
@bot.event
async def on_ready():
    print(f"{bot.user} is online!")

# Announcement Command
@bot.command()
@commands.has_permissions(administrator=True)
async def announce(ctx, *, message):
    embed = discord.Embed(
        title="📢 Announcement",
        description=message,
        color=discord.Color.blue()
    )

    await ctx.send("@everyone", embed=embed)

# Error Handling
@announce.error
async def announce_error(ctx, error):
    if isinstance(error, commands.MissingPermissions):
        await ctx.send("❌ You need Administrator permission to use this command.")

# Bot Token from Railway Variables
TOKEN = os.getenv("DISCORD_TOKEN")

bot.run(TOKEN)
```
