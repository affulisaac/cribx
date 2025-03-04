import { Property } from "@/lib/types/property";

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Lexington Concord Apartments Macomb",
    address: "902 N Charles St, Macomb, IL 61455",
    description: `<p style="margin-bottom: 12px">Welcome to <b>Lexington Concord Apartments</b>, where your ideal campus lifestyle awaits! Imagine living just steps away from all the action—our apartments are so close to campus that any closet could be your new home base for academic success. With a variety of studio to three-bedroom options, you’ll find the perfect space to fit your needs and style.</p><p style="margin-bottom: 12px">Dive into leisure at the biggest swimming pool in town, where sunny days become mini-vacations right outside your door. Stay active and energized with not one, but two state-of-the-art fitness centers at your disposal. Need to focus on work? Our well-equipped business center is here to support your productivity.</p><p style="margin-bottom: 12px">At Lexington Concord, we understand that your furry friends are part of the family, which is why we’re proud to be pet-friendly! Enjoy the convenience of free WiFi, concierge services, and 24-hour maintenance—because we believe that your comfort and peace of mind come first.</p>
<p style="margin-bottom: 12px">With easy access to the bus route and complimentary rides to and from the train station, you’re never far from adventure. Whether you’re looking to study hard or unwind with friends, Lexington Concord Apartments is the place where convenience meets community. Come discover your new home today!</p>`,
    price: { min: 800, max: 1200 },
    logo: "/lexi_logo.jpg",
    type: "Property",
    externalListingUrl: "https://edison356llc.appfolio.com/listings/rental_applications/new?listable_uid=",
    location: {
      lat: 40.46884648312167,
      lng: -90.67855642458525,
    },
    featuredImage: "/lexicon/property_photos/lexington_property1.jpg",
    specs: {
      beds: 2,
      baths: 2,
      sqft: 900,
    },
    parking: {
      type: "Garage",
      spaces: 100,
      cost: 50,
    },
    incentiveList: [
      {
        propertyType: "All",
        title: "$20 off on Security Deposit through cribX",
        note: "Discount",
      },
    ],
    incentives: {
      discount: {
        amount: 20,
        title: "$20 off on Security Deposit through cribX",
      },
    },
    fees: [
      { title: "Application Fee", amount: 30 },
      { title: "Security Deposit", amount: 99 },
    ],
    pet: {
      allowed: true,
      typesAllowed: [" Dogs ", " Cats "],
      monthlyRent: 30,
      oneTimeFee: 0,
      countLimit: 2,
      weightLimit: "45 lbs",
    },
    charges: {
      water: [
        { title: "Water - 1BR", amount: 35 },
        { title: "Water - 1BR", amount: 50 },
        { title: "Water - 2BR", amount: 65 },
      ],
    },
    units: [
      {
        id: "5",
        externalId: "55002496-5d5a-4f3e-8a16-45afead9c67a",
        propertyId: "2",
        type: "Apartment",
        description:
          "2 Bedroom Apartment and 1 and a half bathroom with living area, kitchen and washer/dryer area.",
        name: "Lexington 2 Bedroom - 1.5 Bath",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 30,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 99,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 725,
        deposit: 99,
        rooms: 2,
        baths: 1.5,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "840 sqft.",
        amenities: [
          "Oven",
          "Refrigerator",
          "In Suite Washer & Dryer",
          "Dishwasher",
          "Internet",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/edison356llc/images/1dfe21e8-77c3-4d76-9626-eb6206635ded/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/4e59f085-6f62-4c54-b22d-1ed96b10b8a4/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/94ba1edd-bd65-4e70-867d-33fe5a32c256/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/df4dff2e-ea9d-49c0-ad3f-60efa15e408f/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/7db63b7d-48fc-4435-ae2c-85d0c0e79a95/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/5c9a9345-982c-42ea-8c28-0ad9b48e5fa3/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/0c602902-81a7-48f6-a76c-badd5901e9c8/large.jpg",
        ],
      },
      {
        id: "1",
        externalId: "1a316356-579e-4a99-901d-e59ddc0cceb5",
        propertyId: "2",
        type: "Apartment",
        description:
          "2 floor townhome - 2 bedroom, 1.5 bath downstairs and full bathroom upstairs. Living area, kitchen and laundry area.",
        name: "Concord: 2 Bedroom - 1.5 Bath Townhouse",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 30,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 99,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 845,
        deposit: 99,
        rooms: 2,
        baths: 1.5,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "1000 sqft.",
        amenities: [
          "Oven",
          "Refrigrator",
          "Air Conditioner",
          "Internet",
          "In Suite Washer & Dryer",
          "Outside Deck",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/edison356llc/images/b0d45c22-f3d2-42b6-bcb3-fb632872d418/large.png",
          "https://images.cdn.appfolio.com/edison356llc/images/679e0b93-89e9-4d72-952b-759547fadcc8/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/880539f6-af77-415d-b699-51695d6ca21f/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/b59b5cc4-1a74-4296-a38e-fdb0cfe8f2e2/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/79afc1f6-bac4-4120-a8bb-a7192ccb4f5d/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/dcaba1b6-a105-4d83-a523-3d2595c3e37c/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/ceef7c2a-8d42-476b-b110-9943905d93db/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/a3aec250-7fb4-4fb1-86ed-8c025949d5e3/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/9bff34ed-41a8-44a7-9f12-9c27b2c37951/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/53905891-26b4-421e-ba59-23c36b590db3/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/658f078b-3279-472a-accc-927c0e5b0826/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/7e4bbc3f-4897-4efe-916d-312156c7f59d/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/1958f59f-b64d-46fa-8714-8d08431f9392/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/618e26c1-b9d3-42cc-920b-8325b8ec2076/large.jpg",
        ],
      },
      {
        id: "2",
        externalId: "e250c8e7-241b-4170-b15d-8590c777e9ba",
        propertyId: "2",
        type: "Apartment",
        description:
          "2 Bedroom, 2 bathroom apartment with kitchen and living area",
        name: "Concord: 2 Bedroom - 2 Bath",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 30,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 99,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 750,
        deposit: 99,
        rooms: 2,
        baths: 2,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "900 sqft.",
        amenities: [
          "Oven",
          "Washer&Dryer",
          "Refrigrator",
          "Dishwasher",
          "Internet",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/edison356llc/images/e1a0d850-f1cb-49e2-8071-8c9d3f95a3e7/large.png",
          "https://images.cdn.appfolio.com/edison356llc/images/125b686d-da99-4135-a3c8-86d618d5d54a/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/412ba0c7-efdf-424a-9da9-e674169a50ab/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/e5c6d00e-8811-4b22-be65-abd1caaee782/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/df34eb2a-56af-44d1-8539-b94f6ed9eadd/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/9363216c-7e4b-4fc9-b747-60026b8c4ba0/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/3d61e16d-fd67-40f4-aced-410630f307f3/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/67b645bf-f1dd-4062-97d2-60c3fd0e333d/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/342c87fd-8e80-4d0a-9330-5d841856f325/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/8b35119c-74de-4208-af16-fa6837c9b5fb/large.jpg",
        ],
      },
      {
        id: "3",
        externalId: "3c8caff8-bc3c-4717-8d59-0f42161fdc1b",
        propertyId: "2",
        type: "Apartment",
        description:
          "3 bedroom, 2 bathroom apartment with living area, kitchen and washer/dryer area.",
        name: "3 Bedroom - 2 Bathroom",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 30,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 99,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 950,
        deposit: 99,
        rooms: 3,
        baths: 2,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "900 sqft.",
        amenities: [
          "Oven",
          "Refrigerator",
          "In Suite Washer & Dryer",
          "Dishwasher",
          "Internet",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/edison356llc/images/c8404cd9-ba7f-470b-be75-9920b09502d3/large.png",
          "https://images.cdn.appfolio.com/edison356llc/images/9b7655c6-4819-49dc-9840-ea3757f3b37d/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/61282244-070b-4c64-9583-ac2a2fa19803/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/8dbda969-d094-4300-9742-378c9d8f3d5a/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/d9d6b0c3-e673-46e1-b477-8cf633e7f967/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/c7514f9d-41d2-4a26-a610-7495c2362f5d/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/0617130e-a645-424a-874a-9cb9465d2bb3/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/8ad96133-5e6e-4960-a825-f841954ef5a9/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/592c147d-067c-4513-8dcb-0eb2dd8c57ec/large.jpg",
        ],
      },
      {
        id: "4",
        externalId: "30b71802-66f4-4366-8034-f9a348740157",
        propertyId: "2",
        type: "Apartment",
        description: '',
        name: "Lexington 1 bedroom with an office.",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 30,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 99,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 675,
        deposit: 99,
        rooms: 1,
        baths: 1,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "600 sqft.",
        amenities: [
          "Stove",
          "Refrigerator",
          "Dishwasher",
          "Air Conditioner",
          "Internet",
          "Water",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/edison356llc/images/82cf85a1-90aa-45c1-8510-54e0c8c1e4f8/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/5d469ab6-6372-4c01-8491-209708de7e30/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/16488f0f-c6d3-4537-8db5-320a95ebecdb/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/55b13aef-f53c-4c54-947b-ae3e986fdf88/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/d40148ba-c47c-4925-9391-f9ed173ef8fc/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/5912c85c-02b3-4733-a7f3-96eb624bf405/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/7f527260-d6cf-4969-b385-0b00ed9b8514/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/e66508b2-65d8-4984-8edc-d758cadaba69/large.jpg",
        ],
      },
    
      {
        id: "6",
        externalId: "1f9cc8fb-764f-41dd-9dba-81b8aaa68ac9",
        propertyId: "2",
        type: "Apartment",
        description:
          "2 Bedroom apartment with 2 bathrooms, living area and kitchen.",
        name: "Lexington 2 Bedroom - 2 Bath",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 30,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 99,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 695,
        deposit: 99,
        rooms: 2,
        baths: 2,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "900 sqft.",
        amenities: ["Oven", "Refrigrator", "Dishwasher", "internet", "gas"],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/edison356llc/images/a2b9e030-460c-43f9-9dd5-b9efa5162002/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/eead46cb-c9bd-4d7d-974c-a9a87142555b/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/ca941458-0d74-4897-992b-a857d2b74238/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/bc4ade64-8fd0-463f-bc18-7770a114f58c/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/370c5c1b-dd37-4f4d-8c88-08fbdf150327/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/7877a114-6fda-45ba-8efd-2e158bc196a8/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/943a730f-ecae-4b0e-8c0d-23d7d1b377e5/large.jpg",
        ],
      },
      {
        id: "7",
        externalId: "0a483a39-57e3-4d1a-b72c-de175d21ec1a",
        propertyId: "2",
        type: "Apartment",
        description:
          "1 Bedroom Studio, no bedroom door, 1 bathroom, living area, and kitchen.",
        name: "1 Bedroom Studio",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 30,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 99,
            property_id: "2",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 695,
        deposit: 99,
        rooms: 1,
        baths: 1,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "424 sqft.",
        amenities: [
          "Refrigerator",
          "Oven",
          "Dishwasher",
          "heat",
          "air conditioning",
          "electric",
          "water heating",
          "internet",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/edison356llc/images/73581e0c-190d-480d-ae29-48f619a739fe/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/1b3a425b-a9a6-44b7-9484-26f1952f71ec/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/9956e9a1-1037-44b5-bc44-38018b959593/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/43010bd5-e5fb-4074-86f4-383c2b66ad1a/large.jpg",
          "https://images.cdn.appfolio.com/edison356llc/images/4df25dbc-878c-4155-a9a7-ce7416228172/large.jpg",
        ],
      },
    ],
    amenities: [
      "High Speed Internet Access",
      "Wi-Fi",
      "Washer/Dryer",
      "Air Conditioning",
      "Heating",
      "Ceiling Fans",
      "Smoke Free",
      "Cable Ready",
      "Security System",
      "Tub/Shower",
      "Intercom",
      "Sprinkler System",
      "Dishwasher",
      "Disposal",
      "Pantry",
      "Eat-in Kitchen",
      "Balcony",
      "Porch",
      "Deck",
      "Yard",
      "Kitchen",
      "Microwave",
      "Oven",
      "Range",
      "Refrigerator",
      "Freezer",
      "Instant Hot Water",
      "Carpet",
      "Tile Floors",
      "Vinyl Flooring",
      "Family Room",
      "Basement",
      "Recreation Room",
      "Vaulted Ceiling",
      "Views",
      "Walk-In Closets",
      "Linen Closet",
      "Double Pane Windows",
      "Window Coverings",
      "Lawn",
      "Private Entry",
      "Garage Parking",
      "Off-Street Parking",
      "Pet Friendly",
      "Community Pool",
      "On-Site Maintenance",
      "On-Site Management",
      "Fitness Center",
      "Clubhouse",
      "BBQ Grills",
      "Playground",
      "Business Center",
      "Game Room",
      "Media Center",
      "Recycling",
      "Package Service",
      "Controlled Access",
      "Wi-Fi at Pool",
      "Yoga Studio",
      "Bike Storage",
    ],
    floorPlan: [
      "/lexicon/floor_plans/Lexington_1bed.jpg",
      "/lexicon/floor_plans/Lexington_1bedExtend.jpg",
      "/lexicon/floor_plans/Lexington_1bedOffice.jpg",
      "/lexicon/floor_plans/Lexington_2B1.5B.jpg",
      "/lexicon/floor_plans/Lexington_2B2B.jpg",
      "/lexicon/floor_plans/Lexington_studio.jpg",
    ],

    unitMedia: [
      "/lexicon/unit_photos/unit_photo1.jpg",
      "/lexicon/unit_photos/unit_photo2.jpg",
      "/lexicon/unit_photos/unit_photo3.jpg",
      "/lexicon/unit_photos/unit_photo5.jpg",
      "/lexicon/unit_photos/unit_photo6.jpg",
      "/lexicon/unit_photos/unit_photo7.jpg",
      "/lexicon/unit_photos/unit_photo8.jpg",
      "/lexicon/unit_photos/unit_photo9.jpg",
      "/lexicon/unit_photos/unit_photo10.jpg",
      "/lexicon/unit_photos/unit_photo11.jpg",
    ],
    communityFeatures: [
      "Wi-Fi",
      "Laundry Facilities",
      "Maintenance on site",
      "24 Hour Access",
      "Shuttle to Train",
      "Online Services",
      "Pet Play Area",
      "Business Center",
      "Walk-Up",
      "$3 million in recent renovations",
      "Courtyard",
      "Outdoor Grilling station",
      "Picnic Area",
      "Fitness Center",
      "Pool",
      "Bicycle Storage",
      "Volleyball Court",
      "Shuttle To Campus",
      "Walk To Campus",
      "Individual Leases Available",
    ],
    videos: [
      {
        id: "v1",
        title: "Property Tour",
        url: "https://example.com/tour.mp4",
      },
    ],
    contact_phone: "(309)837-3377",
    contact_email: "hayley@lakeshoremgmt.com",
    contact_name: "Lexington Concord Apartments",
    contact: {
      name: "Lexington Concord Apartments",
      email: "hayley@lakeshoremgmt.com",
      phone: "(309)837-3377",
    },
    images: [
      "/lexicon/property_photos/lexington_property1.jpg",
      "/lexicon/property_photos/lexington_property2.jpg",
      "/lexicon/property_photos/lexington_property3.jpg",
      "/lexicon/property_photos/lexington_property4.jpg",
      "/lexicon/property_photos/lexington_property5.jpg",
      "/lexicon/property_photos/lexington_property6.jpg",
      "/lexicon/property_photos/lexington_property7.jpg",
      "/lexicon/property_photos/lexington_property8.jpg",
      "/lexicon/property_photos/lexington_property9.jpg",
      "/lexicon/property_photos/lexington_property10.jpg",
    ],
  },
  {
    id: "2",
    title: "Turnberry Village",
    address: "201 Wigwam Hollow Road, Macomb, IL",
    description: `Voted by WIU students and the community as the “Best Apartment Complex to Live” for 2016 and 2017, Turnberry Village in Macomb offers you a comfortable and welcoming place to call home. We offer apartments that include 1 to 4 bedrooms and have been designed with convenient features such as a full-size washer and dryer, energy-efficient electric heat and central air conditioning, and a kitchen complete with a dishwasher, refrigerator, range/oven, and garbage disposal.
Not only have the apartments themselves been designed to offer convenience and comfort, but the community has been built to serve the needs of our residents. Enjoy our fitness center, swimming pool, on-the-go snack room, and bark park.
We have built our apartment complex to exceed the expectations of our residents. Our dedication to customer service, including 24-hour emergency maintenance service, has strengthened our community and allowed us to serve the people of Macomb. We look forward to learning more about how we can help you.
Turnberry Village III is an apartment community located in McDonough County and the 61455 ZIP Code. This area is served by the Macomb Community Unit School District 185 attendance zone.`,
    price: { min: 800, max: 1200 },
    logo: "/turn_logo.jpeg",
    externalListingUrl: "https://freemandevelopment.appfolio.com/listings/rental_applications/new?listable_uid=",
    featuredImage: "/turnberry/Turnberry8.jpg",
    specs: {
      beds: 2,
      baths: 2,
      sqft: 900,
    },
    location: {
      lat: 40.45951654910126,
      lng: -90.69379054232895,
    },

    parking: {
      type: "Garage",
      spaces: 100,
      cost: 50,
    },
    incentives: {
      discount: {
        amount: 50,
        title: "$20 off on Security Deposit through cribX",
      },
    },

    fees: [
      { title: "Application Fee", amount: 30 },
      { title: "Security Deposit", amount: 500 },
    ],
    type: "Property",
    pet: {
      allowed: true,
      typesAllowed: [" Dogs ", " Cats "],
      monthlyRent: 20,
      oneTimeFee: 300,
      countLimit: 2,
      weightLimit: "45 lbs",
    },
    charges: {
      water: [
        { title: "Water - 1BR", amount: 30 },
        { title: "Water - 2BR", amount: 40 },
        { title: "Water - 3BR", amount: 60 },
        { title: "Water - 4BR", amount: 80 },
      ],
    },
    amenities: [
      "High Speed Internet Access",
      "Wi-Fi",
      "Washer/Dryer",
      "Air Conditioning",
      "Heating",
      "Ceiling Fans",
      "Smoke Free",
      "Cable Ready",
      "Security System",
      "Tub/Shower",
      "Intercom",
      "Sprinkler System",
      "Dishwasher",
      "Disposal",
      "Pantry",
      "Eat-in Kitchen",
      "Balcony",
      "Porch",
      "Deck",
      "Yard",
      "Kitchen",
      "Microwave",
      "Oven",
      "Range",
      "Refrigerator",
      "Freezer",
      "Instant Hot Water",
      "Carpet",
      "Tile Floors",
      "Vinyl Flooring",
      "Family Room",
      "Basement",
      "Recreation Room",
      "Vaulted Ceiling",
      "Walk-In Closets",
      "Lawn",
    ],
    incentiveList: [
      {
        title: "2 bedroom - $20 discount",
      },
      {
        title: "3 bedroom - $30 discount",
      },
      {
        title: "4 bedroom - $40 discount",
      },
    ],
    floorPlan: [],
    unitMedia: [],
    units: [
      {
        id: "6",
        externalId: "4c328c08-7168-468c-baa3-9a10685d5bb5",
        propertyId: "12",
        type: "Apartment",
        description: '',
        name: "4 Bedroom - Turnberry III",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 35,
            property_id: "12",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 500,
            property_id: "12",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 1400,
        deposit: 500,
        rooms: 4,
        baths: 2,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "1398 sqft.",
        amenities: [
          "Washer and Dryer",
          "Refrigerator",
          "Microwave",
          "Stove",
          "Dishwasher",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/freemandevelopment/images/4e3e2fdc-87d1-4c29-a33f-3547a4e3d3ba/large.jpg",
          "https://images.cdn.appfolio.com/freemandevelopment/images/f56a1c0a-6c32-40b8-9249-a18b523bcb10/large.jpg",
        ],
      },
      {
        id: "5",
        externalId: "31f0841f-b4d9-4838-8fa4-ce50417c1bc6",
        propertyId: "12",
        type: "Apartment",
        description: "",
        name: "3 Bedroom ",
        paymentDuration: "Monthly",
        fees: [
          {
            title: "Application Fee",
            amount: 35,
            property_id: "12",
            id: "1",
            description: "Application Fee",
          },
          {
            title: "Security Deposit",
            amount: 500,
            property_id: "12",
            id: "1",
            description: "Application Fee",
          },
        ],
        price: 1050,
        deposit: 500,
        rooms: 3,
        baths: 2,
        incentives: ["$20 off on Security Deposit through cribX"],
        size: "1209 sqft.",
        amenities: [
          "Washer and Dryer",
          "Refrigerator",
          "Microwave",
          "Dishwasher",
        ],
        isAvailable: true,
        moveInDate: "08/15/2025",
        leaseTerms: [],
        images: [
          "https://images.cdn.appfolio.com/freemandevelopment/images/92e01e23-c539-47e0-bad4-89abcc1f7d6c/large.jpg",
          "https://images.cdn.appfolio.com/freemandevelopment/images/e1fefe7f-a177-4f7f-a882-5be0f8c5e2a9/large.jpg",
        ],
      },
    ],
    communityFeatures: [
      "Wi-Fi",
      "Laundry Facilities",
      "Maintenance on site",
      "24 Hour Access",
      "Shuttle to Train",
      "Online Services",
      "Pet Play Area",
      "Business Center",
      "Courtyard",
      "Outdoor Grilling station",
      "Picnic Area",
      "Fitness Center",
      "Pool",
      "Bicycle Storage",
      "Shuttle To Campus",
      "Individual Leases Available",
    ],
    videos: [
      {
        id: "v1",
        title: "Property Tour",
        url: "https://example.com/tour.mp4",
      },
    ],
    contact_phone: "309-836-3536",
    contact_email: "turnberrymacomb2@aol.com",
    contact_name: "Turnberry Apartments",
    contact: {
      name: "Turnberry Apartments",
      email: "turnberrymacomb2@aol.com",
      phone: "309-836-3536",
    },
    images: [
      "/turnberry/Turnberry1.jpg",
      "/turnberry/Turnberry2.jpg",
      "/turnberry/Turnberry3.jpg",
      "/turnberry/Turnberry4.jpg",
      "/turnberry/Turnberry5.jpg",
      "/turnberry/Turnberry6.jpg",
      "/turnberry/Turnberry7.jpg",
      "/turnberry/Turnberry8.jpg",
      "/turnberry/Turnberry9.jpg",
      "/turnberry/Turnberry10.jpeg",
      "/turnberry/Turnberry11.jpeg",
      "/turnberry/Turnberry12.jpeg",
    ],
  },
];
