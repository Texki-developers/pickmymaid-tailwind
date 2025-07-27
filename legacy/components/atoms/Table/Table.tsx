import { Grid, GridItem, Image, Button, Text, Show } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function FindJobTable({ data }) {
  const router = useRouter();
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = `${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date
        .getDate()
        .toString()
        .padStart(2, "0")}/${date.getFullYear()}`;
    return formattedDate;
  }
  return (
    <Grid
      templateAreas={{
        base: `"row"
                "row"
                "row"
                "row"
                "row"
    `,
        lg: `"h1 h2 h3 h4 h5"
                            "row row row row row"
`,
      }}
      w={{ sm: "80%", lg: "100%" }}
      m={{ sm: "auto", lg: "0" }}
      rowGap={{ base: "0", lg: "2rem" }}
      overflow="hidden"
      p={{ base: "0", md: "3rem" }}
    >
      {/* Column Headings */}
      <Show above="lg">
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h1">
          Job Details
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h2">
          Commitment
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h3">
          Location
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h4">
          Posted Date
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h5">
          Actions
        </GridItem>
      </Show>
      {data &&
        data?.map((item: any) => (
          <>
            <GridItem
              marginTop={{ base: "1rem", lg: "0" }}
              key={item._id}
              display={{ base: "column", sm: "column", lg: "flex" }}
              gap="1rem"
              colSpan={1}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
              borderRadius={{ base: "0", lg: "8px 0 0 8px" }}
              borderLeft={{
                base: "1px solid #FF8F5F",
                lg: "1px solid #FF8F5F",
              }}
              borderTop={{ base: "1px solid #FF8F5F", lg: "1px solid #FF8F5F" }}
              borderRight={{ base: "1px solid #FF8F5F", lg: "0" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              p={{ base: "0", lg: "1.5rem" }}
              borderColor="brand.primary.300"
            >
              <Image
                src={`https://api.pickmymaid.com/${item.image}`}
                alt=""
                objectFit={{ base: "cover" }}
                w={{ base: "100%", lg: "5rem" }}
                h={{ base: "100%", lg: "3rem" }}
                aspectRatio={{ base: "4/3" }}
              />
              <Show above="lg">
                <Text variant="description" pt={{ base: "1rem", lg: "0" }}>
                  {item.title}
                </Text>
              </Show>
            </GridItem>
            <Show below="lg">
              <GridItem
                padding={{ base: "0.3rem  1rem 0.3rem 1rem", lg: "0" }}
                display="flex"
                colSpan={1}
                rowSpan={1}
                alignItems="center"
                fontWeight="bold"
                textAlign="center"
                area="row"
                borderLeft={{ base: "1px solid #FF8F5F", lg: "0" }}
                borderRight={{ base: "1px solid #FF8F5F", lg: "0" }}
                borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
                borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
                borderColor="brand.primary.300"
              >
                <Show below="lg">
                  <Text paddingRight="1rem" variant="description">
                    Title :
                  </Text>
                </Show>

                <Text variant="description">{item.title}</Text>
              </GridItem>
            </Show>
            <GridItem
              display="flex"
              colSpan={1}
              padding={{ base: "0.3rem  1rem 0.3rem 1rem", lg: "0" }}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign={{ base: "left", md: "center" }}
              area="row"
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderLeft={{ base: "1px solid #FF8F5F", lg: "0" }}
              borderRight={{ base: "1px solid #FF8F5F", lg: "0" }}
              borderColor="brand.primary.300"
            >
              <Show below="lg">
                <Text paddingRight="1rem" variant="description">
                  Job Type :
                </Text>
              </Show>
              <Text variant="description"> {item.commitment}</Text>
            </GridItem>

            <GridItem
              padding={{ base: "0.3rem  1rem 0.3rem 1rem", lg: "0" }}
              display="flex"
              colSpan={1}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
              borderLeft={{ base: "1px solid #FF8F5F", lg: "0" }}
              borderRight={{ base: "1px solid #FF8F5F", lg: "0" }}
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderColor="brand.primary.300"
            >
              <Show below="lg">
                <Text paddingRight="1rem" variant="description">
                  Location :
                </Text>
              </Show>

              <Text variant="description">{item.location}</Text>
            </GridItem>
            <GridItem
              padding={{ base: "0.3rem  1rem 0.3rem 1rem", lg: "0" }}
              display="flex"
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderColor="brand.primary.300"
              colSpan={1}
              borderLeft={{ base: "1px solid #FF8F5F", lg: "0" }}
              borderRight={{ base: "1px solid #FF8F5F", lg: "0" }}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
            >
              <Show below="lg">
                <Text paddingRight="1rem" variant="description">
                  CreatedAt :
                </Text>
              </Show>
              <Text variant="description">{formatDate(item.createdAt)}</Text>
            </GridItem>
            <GridItem
              padding={{ base: "0.3rem  1rem 0.3rem 1rem", lg: "0" }}
              display="flex"
              rowSpan={1}
              borderLeft={{ base: "1px solid #FF8F5F", lg: "0" }}
              borderRight={{
                base: "1px solid #FF8F5F",
                lg: "1px solid #FF8F5F",
              }}
              borderBottom={{ base: "1px solid #FF8F5F" }}
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderColor="brand.primary.300"
              colSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
              borderRadius={{ base: "0", lg: "0 8px 8px 0" }}
            >
              <Button
                marginBottom={{ base: "1rem", lg: "0" }}
                onClick={() => {
                  router.push("/apply-job");
                }}
                w={{ base: "100%", lg: "50%" }}
              >
                View
              </Button>
            </GridItem>
          </>
        ))}
    </Grid>
  );
}
