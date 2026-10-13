# Just Call

> Remember to connect with the people who matter.

Just Call is a simple Android app that helps you remember to call the people you care about.

We often don't forget people because we don't care. We forget because life gets busy, we're distracted, or we simply lose track of time.

Just Call gives you a gentle reminder when it's been too long.

---

## ❤️ Why Just Call?

Have you ever thought:

> "I should call my mom."

And then three weeks passed?

Or remembered a friend and realized you haven't talked to them in months?

Just Call is built around a simple idea:

**You already care. You just need a little reminder to show it.**

It's not a social network.
It's not a messaging app.
It's not another productivity system.

It's simply a reminder to make the call.

---

## ✨ Features

- 👥 Select the people who matter to you
- ⏰ Choose how often you want to stay in touch
- 🔔 Receive gentle reminders when it's time to call
- 📞 Call directly from the app
- 📝 Keep your important relationships in one simple place
- 🔒 Local-first and privacy-focused
- 🗑️ Delete your data whenever you want

### Example

You select:

**Mom**

and choose:

**Remind me every 7 days**

If you haven't checked in, Just Call reminds you:

> **You know that you care. Let them know.  
> It just takes one call.**

---

## 🎯 Product Philosophy

Just Call follows a few simple principles:

### Keep it simple

The app has one job:

**Help you remember to call people who matter.**

### Human before productivity

Relationships aren't tasks to optimize.

The app should feel like a gentle nudge from a friend, not a productivity manager.

### Privacy first

Your relationships are personal.

Just Call should never need to know what you talked about.

### No guilt traps

Reminders should motivate you, not shame you.

---

## 🔐 Privacy

Just Call is designed with privacy as a core constraint.

The app does not need:

- ❌ SMS messages
- ❌ Message content
- ❌ Social media accounts
- ❌ Cloud accounts
- ❌ Relationship analytics
- ❌ Advertising profiles

The goal is to keep relationship data on the device whenever possible.

---

## 📱 MVP

The first version focuses on the smallest useful experience:

1. Select important contacts
2. Set a check-in frequency
3. Receive a reminder
4. Call the person
5. Continue staying connected

No unnecessary social features.
No gamification.
No complicated dashboards.

---

## 🛠️ Tech Stack

Built with:

- **Flutter**
- **Dart**
- **Android**
- Local storage
- Local notifications
- Android Contacts API
- Android phone/dialer integration

The project follows a feature-oriented architecture with an emphasis on keeping the codebase simple and maintainable.

---

## 🏗️ Project Structure

```text
lib/
├── app/
│   ├── router/
│   ├── theme/
│   └── app.dart
│
├── core/
│   ├── database/
│   ├── notifications/
│   ├── permissions/
│   └── utils/
│
├── features/
│   ├── onboarding/
│   ├── contacts/
│   ├── reminders/
│   ├── home/
│   └── settings/
│
└── main.dart