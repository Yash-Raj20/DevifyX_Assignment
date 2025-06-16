export const generateMockData = (count = 100) => {
  const data = [];
  const titles = [
    "Road Repair",
    "Garbage Issue",
    "Water Leakage",
    "Power Outage",
    "Street Light Problem",
    "Public Toilet Issue",
    "Park Maintenance",
    "Drainage Blockage",
    "Tree Falling",
    "Noise Complaint",
  ];

  const descriptions = [
    "Reported near Sector 5 by a resident who highlighted a persistent issue affecting traffic flow and safety in the area.",
    "Needs urgent attention by local authorities as the problem is escalating and impacting multiple residents.",
    "Pending for several days without any visible action, despite multiple follow-ups and reminders submitted.",
    "Frequently reported but not resolved yet, causing growing frustration among the community and local residents.",
    "Affecting the daily life of nearby residents, especially during peak hours and school timings, creating inconvenience.",
    "Causing inconvenience during night hours due to poor lighting, safety concerns, and noise from the affected zone.",
    "Creating waterlogging in rainy days, making roads slippery and increasing the risk of accidents for both vehicles and pedestrians.",
    "Hazardous to pedestrians and vehicles, with several minor injuries already reported by local citizens.",
    "A recurring issue in this locality that continues to be neglected, despite being flagged by multiple community members.",
    "Reported through multiple complaints via the portal and helpline, yet the issue remains unresolved with no follow-up.",
  ];

  for (let i = 0; i < count; i++) {
    const randomTitle = titles[i % titles.length];
    const randomDesc = descriptions[i % descriptions.length];

    data.push({
      id: i,
      title: `${randomTitle} (Case #${i + 1})`,
      subtitle: `Filed by Citizen #${(i % 100) + 1}`,
      description: `Issue ${i + 1} - ${randomDesc}`,
      avatar: `https://i.pravatar.cc/40?img=${(i % 70) + 1}`,
      date: new Date(Date.now() - i * 10000000).toISOString(),
    });
  }

  return data;
};
