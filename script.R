hex_winners <- read.csv("hex_awards(Sheet1).csv")

hex_winners_canvas <- hex_winners |> 
  dplyr::filter(award_status == "awarded") |> 
  dplyr::arrange(desc(hall_of_fame)) |> 
  dplyr::mutate(
    name = dplyr::case_when(
      hall_of_fame == "agreed" ~ student_name, 
      .default = "Anonymous"
    )
  ) |> dplyr::select(name, award)

write.csv(hex_winners_canvas, "hex_winners_canvas.csv", row.names = FALSE)