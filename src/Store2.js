export const domain = [
  'ADSL', 'ADCM', 'ADAE', 'ADEFF', 'ADTTE'
]

export const reports = [
    {
      "Footnote": "",
      "id": "T_DS_01_F",
      "shell": "DS01",
      "title": "Recruitment of subjects, by country and by site",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "(a) Percentages based on subjects randomized|Completed treatment per protocol is defined as no premature treatment discontinuation during the|treatment period of approximately 108 weeks. \n|Completed study as per protocol: Defined as no premature study withdrawal irrespectively if|treatment was completed or not.\n|Subjects completed treatment and study as per protocol: Defined as no premature treatment|discontinuation and no premature study withdrawal. \n",
      "id": "T_DS_02_SC",
      "shell": "DS02",
      "title": "Disposition of subjects",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "Subjects who where successfully randomized are not counted as screenig failures nor within the|reasons for screening failure, even if they failed screeining at a first attempt.",
      "id": "T_DS_03_SC",
      "shell": "DS03",
      "title": "Reasons for screening failure",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_DS_04_F",
      "shell": "DS04",
      "title": "Reasons for premature study discontinuation",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_DS_05_S",
      "shell": "DS05",
      "title": "Reasons for premature treatment discontinuation",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "(a) Time from randomization up to EOS",
      "id": "T_DS_06_F",
      "shell": "DS06",
      "title": "Time in study(a) overall and prior/post protocol version 4",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "Time in study = Time from randomization up to EOS",
      "id": "T_DS_07_F",
      "shell": "DS07",
      "title": "Time in study",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "Time on treatment = Time from study treatment start to EOT.",
      "id": "T_DS_08_F",
      "shell": "DS07",
      "title": "Time on treatment",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "Time in study up to per protocol exclusion = Time from randomization to EOS or per protocol|exclusion.|Subjects excluded from PPS have are considered to have been excluded from randomization date onward.",
      "id": "T_DS_09_F",
      "shell": "DS07",
      "title": "Time in study up to per protocol exclusion",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "Time in study = EOS date - Randomization date + 1.|Cumulative percentage of subjects with time >= x Weeks is presented.",
      "id": "F_DS_10_F",
      "shell": "CDF01",
      "title": "Time in study",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "Time on treatment = EOT + 7 days - Study treatment start date + 1.|Cumulative percentage of subjects with time >= x Weeks is presented.",
      "id": "F_DS_11_F",
      "shell": "CDF01",
      "title": "Time on-treatment",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "yrs = years. Time in study up to Week 108 = time from randomization to EOS, capped at 108 weeks per|subject.  Expected time in study up to Week 108 = 108 weeks. Proportion of missing observation time|= 1 - Cumulative time in study up to Week 108 / Cumulative expected time in study *100. |Time on-treatment = time from randomization to EOT+7, capped at 108 weeks per subject.  Time|off-treatment = time from EOT + 7 days to EOS, capped at 108 weeks. Expected off-treatment time = time from|EOT + 7 days to Week 108.  Proportion of missing observation time after EOT + 7 days = 1 - Cumulative time off-treatment after EOT +7  and up to Week 108 / Cumulative expected off-treatment time after EOT + 7 days up to Week 108.",
      "id": "T_DS_12_F",
      "shell": "DS08",
      "title": "Proportion of missing observation time up to Week 108",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "(a) For analyses based on the SAF, subjects are summarized within the treatment group they were|exposed to for the majority of time on study treatment in case both study drugs (teriflunomide and|ponesimod) were taken by a subject at some point during the study. |If a subject received teriflunomide and ponesimod for exactly the same number of days, they are|summarized within the treatment they are assigned to by randomization.|Treated with Ponesimod and Teriflunomide: Subject received both study drugs at some point during the|study.",
      "id": "T_DS_13_F",
      "shell": "ANA01",
      "title": "Overview of analysis sets",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "A subject may have more than one reason for exclusion from an analysis set",
      "id": "T_DS_14_F",
      "shell": "ANA02",
      "title": "Reasons for exclusion from analysis sets",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "Proportion of time excluded from the Per Protocol analysis = 1- Cumulative time in study up to EOS|or per protocol exclusion / Cumulative time in study up to EOS.|yrs=years.",
      "id": "T_DS_15_F",
      "shell": "ANA03",
      "title": "Proportion of follow-up time excluded from Per Protocol analysis (%)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_16_F",
      "shell": "",
      "title": "Listing of randomization scheme and codes (randomized subjects only)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_17_F",
      "shell": "",
      "title": "Listing of randomization and kit information (randomized subjects only)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_18_SC",
      "shell": "",
      "title": "Listing of screening failures",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_19_F",
      "shell": "LDS01",
      "title": "Listing of disposition of subjects",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_20_F",
      "shell": "LDS02",
      "title": "Listing of subjects with premature study withdrawal and related reasons",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_21_F",
      "shell": "LDS03",
      "title": "Listing of subjects with premature treatment withdrawal and related reasons",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_22_F",
      "shell": "",
      "title": "Listing of code break or subject unblinding",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_23_F",
      "shell": "LANA01",
      "title": "Listing of subject membership in the different analysis sets",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_24_F",
      "shell": "LANA02",
      "title": "Listing of reasons for exclusion from an analysis set",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_25_F",
      "shell": "LANA03",
      "title": "Listing of reasons for excluding data from the per protocol analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DS_26_SC",
      "shell": "",
      "title": "Listing of unmet eligibility criteria",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADDS",
      "description": null
    },
    {
      "Footnote": "EudraCT=European Union Drug Regulating Authorities Clinical Trials",
      "id": "T_DM_01_F",
      "shell": "DM01",
      "title": "Demographic characteristics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDM",
      "description": null
    },
    {
      "Footnote": "EudraCT=European Union Drug Regulating Authorities Clinical Trials",
      "id": "T_DM_02_P",
      "shell": "DM01",
      "title": "Demographic characteristics",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADDM",
      "description": null
    },
    {
      "Footnote": "EudraCT=European Union Drug Regulating Authorities Clinical Trials",
      "id": "T_DM_03_D",
      "shell": "DM01",
      "title": "Demographic characteristics",
      "population": "Dlco Safety Set",
      "Pgmer": "",
      "domain": "ADDM",
      "description": null
    },
    {
      "Footnote": "(a) DMT = MS disease-modifying treatment |(b) Highly active disease is defined by one or both of the following conditions met: 1) Any DMT|received during the year before randomization AND (â‰¥1 relapse within the last 12 months prior to|screening and â‰¥1 Gd+ T1 lesion and/or â‰¥9 T2 lesions at baseline)|OR (no. of relapses in the 12 months prior to screening â‰¥ no. of relapses between 24 and 12 months|prior to screening, for subjects with at least one relapse within 24 months prior to screening) 2) â‰¥2|relapses within the last 12 months prior to screening|and baseline EDSS>2 and baseline MRI read centrally shows â‰¥ 1 Gd+ T1 lesion.",
      "id": "T_SC_01_F",
      "shell": "SC01",
      "title": "Baseline disease characteristics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "(a) DMT = MS disease-modifying treatment |(b) Highly active disease is defined by one or both of the following conditions met: 1) Any DMT|received during the year before randomization AND (â‰¥1 relapse within the last 12 months prior to|screening and â‰¥1 Gd+ T1 lesion and/or â‰¥9 T2 lesions at baseline)|OR (no. of relapses in the 12 months prior to screening â‰¥ no. of relapses between 24 and 12 months|prior to screening, for subjects with at least one relapse within 24 months prior to screening) 2) â‰¥2|relapses within the last 12 months prior to screening|and baseline EDSS>2 and baseline MRI read centrally shows â‰¥ 1 Gd+ T1 lesion.",
      "id": "T_SC_02_P",
      "shell": "SC01",
      "title": "Baseline disease characteristics",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "(a) DMT = MS disease-modifying treatment |(b) Highly active disease is defined by one or both of the following conditions met: 1) Any DMT|received during the year before randomization AND (â‰¥1 relapse within the last 12 months prior to|screening and â‰¥1 Gd+ T1 lesion and/or â‰¥9 T2 lesions at baseline)|OR (no. of relapses in the 12 months prior to screening â‰¥ no. of relapses between 24 and 12 months|prior to screening, for subjects with at least one relapse within 24 months prior to screening) 2) â‰¥2|relapses within the last 12 months prior to screening|and baseline EDSS>2 and baseline MRI read centrally shows â‰¥ 1 Gd+ T1 lesion.",
      "id": "T_SC_03_D",
      "shell": "SC01",
      "title": "Baseline disease characteristics",
      "population": "Dlco Safety Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "Treated within 2 years: Any MS disease-modifying treatment (DMT) received within 2 years prior to|randomization",
      "id": "T_SC_04_F",
      "shell": "SC02",
      "title": "Stratification factors",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "Treated within 2 years: Any MS disease-modifying treatment (DMT) received within 2 years prior to|randomization",
      "id": "T_SC_05_P",
      "shell": "SC02",
      "title": "Stratification factors",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "Treated within 2 years: Any MS disease-modifying treatment (DMT) received within 2 years prior to|randomization",
      "id": "T_SC_06_D",
      "shell": "SC02",
      "title": "Stratification factors",
      "population": "Dlco Safety Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_SC_07_SC",
      "shell": "LDM01",
      "title": "Listing of demographic characteristics",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "(a) DMT = MS disease-modifying treatment",
      "id": "L_SC_08_SC",
      "shell": "LSC01",
      "title": "Listing of baseline disease characteristics",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "(a) Highly active disease is defined by one or both of the following conditions met: 1) Any DMT received during the year|before randomization AND (â‰¥1 relapse within the last 12 months prior to screening and â‰¥1 Gd+ T1 lesion and/or â‰¥9 T2|lesions at baseline) |OR (no. of relapses in the 12 months prior to screening â‰¥ no. of relapses between 24 and 12 months prior to screening,|for subjects with at least one relapse within 24 months prior to screening) 2) â‰¥2 relapses within the last 12 months|prior to screening |and baseline EDSS>2 and baseline MRI read centrally shows â‰¥ 1 Gd+ T1 lesion.",
      "id": "L_SC_09_SC",
      "shell": "LSC02",
      "title": "Listing of other baseline disease characteristics",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_SC_10_F",
      "shell": "",
      "title": "Listing of stratification factors",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_SC_11_F",
      "shell": "",
      "title": "Listing of chest x-ray",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_SC_12_F",
      "shell": "",
      "title": "Listing of reproductive system findings",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSC",
      "description": null
    },
    {
      "Footnote": "Previous medical history are reported diseases or diagnosis with an end date before/at the study|treatment start date.|Frequencies represent the number of subjects with the event.|System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|Conditions reported as complications or symptoms associated with MS on the corresponding eCRF are|excluded from this table.",
      "id": "T_MH_01_F",
      "shell": "MH01",
      "title": "Previous medical history by primary system organ class (SOC) and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMH",
      "description": null
    },
    {
      "Footnote": "Concomitant diseases are reported diseases or diagnoses ongoing at study treatment start.|Frequencies represent the number of subjects with the event.|System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|Conditions reported as complications or symptoms associated with MS on the corresponding eCRF are|excluded from this table.",
      "id": "T_MH_02_F",
      "shell": "MH01",
      "title": "Concomitant diseases by primary system organ class (SOC) and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMH",
      "description": null
    },
    {
      "Footnote": "Previous complication/symptoms are reported as not ongoing at screening.|Frequencies represent the number of subjects with the event.",
      "id": "T_MH_03_F",
      "shell": "MH02",
      "title": "Previous complications or symptoms associated with MS within the last 24 months prior to the study",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMH",
      "description": null
    },
    {
      "Footnote": "Concomitant complication/symptoms are reported as ongoing at screening.|Frequencies represent the number of subjects with the event.",
      "id": "T_MH_04_F",
      "shell": "MH02",
      "title": "Concomitant complications or symptoms associated with MS within the last 24 months prior to the study",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMH",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_MH_05_SC",
      "shell": "",
      "title": "Listing of complication or Symptoms Associated with MS within the last 24 months prior to the study",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADMH",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_MH_06_SC",
      "shell": "",
      "title": "Listing of medical history",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADMH",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Previous therapies: Stopped prior to study treatment start.",
      "id": "T_CM_01_F",
      "shell": "CM01",
      "title": "Previous therapies by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Includes therapies ongoing at study treatment start as well as therapies initiated during the|respective period.",
      "id": "T_CM_02_F",
      "shell": "CM03",
      "title": "Study concomitant therapies (taken between study treatment start and EOS) by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Includes therapies ongoing at study treatment start as well as therapies initiated during the|respective period.",
      "id": "T_CM_03_F",
      "shell": "CM03",
      "title": "Treatment concomitant therapies (taken between study treatment start up to EOT) by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Includes therapies ongoing at study treatment start as well as therapies initiated during the|respective period.",
      "id": "T_CM_04_F",
      "shell": "CM03",
      "title": "Therapies taken between study treatment start up to EOT+15 days by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Previous therapies: Stopped prior to study treatment start.",
      "id": "T_CM_05_F",
      "shell": "CM01",
      "title": "Previous disease modifying therapies (DMTs) for MS by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Includes therapies ongoing at study treatment start as well as therapies initiated during the|respective period.",
      "id": "T_CM_06_F",
      "shell": "CM03",
      "title": "Study concomitant disease modifying therapies (DMTs) for MS (taken between study treatment start and EOS) by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Includes therapies ongoing at study treatment start as well as therapies initiated during the|respective period.",
      "id": "T_CM_07_F",
      "shell": "CM03",
      "title": "Treatment concomitant disease modifying therapies (DMTs) for MS by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.",
      "id": "T_CM_08_F",
      "shell": "CM03",
      "title": "Disease modifying therapies (DMTs) for MS starting after EOT + 7 days by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Includes therapies ongoing at study treatment start as well as therapies initiated during the|respective period.",
      "id": "T_CM_09_F",
      "shell": "CM03",
      "title": "Study concomitant steroids for treatment of relapse (taken between study treatment start and EOS) by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "Subjects without steroid use for treatment of relapses in the respective period are assigned 0 mg.  |Only steroids taken after study treatment start up to the specified time point for treatment of|relapse are considered.",
      "id": "T_CM_10_F",
      "shell": "CM03",
      "title": "Accumulated steroid dose for treatment of relapse (prednisone equivalent doses in mg) by period",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.|Includes therapies ongoing at study treatment start as well as therapies initiated during the|respective period.",
      "id": "T_CM_11_F",
      "shell": "CM03",
      "title": "Treatment concomitant beta blocking agents (taken between study treatment start up to EOT) by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|Subjects with multiple therapies coded by the same preferred term, are counted only once for each|subject.",
      "id": "T_CM_12_F",
      "shell": "CM01",
      "title": "Therapies used for accelerated elimination starting between EOT date and EOT + 15 days by anatomical therapeutic chemical (ATC) class and preferred term",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|P = Previous therapies, SC = Study Concomitant, CT = Treatment concomitant, OB = Ongoing at baseline.",
      "id": "L_CM_13_SC",
      "shell": "CML01",
      "title": "Listing of all therapies",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|P = Previous therapies, SC = Study Concomitant, CT = Treatment concomitant, OB = Ongoing at baseline.",
      "id": "L_CM_14_F",
      "shell": "CML02",
      "title": "Listing of disease modifying therapies (DMTs) for MS",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|P = Previous therapies, SC = Study Concomitant, CT = Treatment concomitant, OB = Ongoing at baseline.",
      "id": "L_CM_15_F",
      "shell": "CML01",
      "title": "Listing of beta blocking agents",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|P = Previous therapies, SC = Study Concomitant, CT = Treatment concomitant, OB = Ongoing at baseline.",
      "id": "L_CM_16_F",
      "shell": "CML01",
      "title": "Listing of corticosteroids for treatment of relapse",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "ATC Classes and Preferred Terms are based on WHO-DRUG dictionary version of March 2018.|P = Previous therapies, SC = Study Concomitant, CT = Treatment concomitant, OB = Ongoing at baseline.",
      "id": "L_CM_17_F",
      "shell": "CML01",
      "title": "Listing of therapies used for accelerated elimination",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADCM",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_DV_01_F",
      "shell": "DV01",
      "title": "All protocol deviations",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDV",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_DV_02_F",
      "shell": "DV01",
      "title": "Important protocol deviations",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDV",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DV_03_SC",
      "shell": "DVL01",
      "title": "Listing of Protocol Deviations, by country and site",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADDV",
      "description": null
    },
    {
      "Footnote": "(a) Subject year is the sum over all subjects' exposure.",
      "id": "T_EX_01_S",
      "shell": "EX01",
      "title": "Study treatment exposure",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADEX",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_EX_02_F",
      "shell": "LEX01",
      "title": "Listing of exposure to and compliance with study drug as reported in eCRF",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADEX",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_DA_01_S",
      "shell": "DA01",
      "title": "Compliance with study treatment",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADDA",
      "description": null
    },
    {
      "Footnote": "Percentages of subjects are based on the number of subjects in the safety set (N).|Percentages of events are based on the total number of up-titration episodes reported on subjects in|the safety set.",
      "id": "T_DA_02_S",
      "shell": "DA02",
      "title": "Non-compliance with study treatment during up-titration",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADDA",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DA_03_F",
      "shell": "",
      "title": "Listing of compliance with study treatment",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADDA",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_AE_01_S",
      "shell": "AE01",
      "title": "Overview of treatment-emergent adverse events (AE)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_02_S",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_03_S",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events by system organ class (SOC) and preferred term - only events with onset up to EOT + 1 day",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_04_S",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events on Day 1, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_05_1R",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events on Day 1 of re-initiation, by system organ class (SOC) and preferred term",
      "population": "Subjects with at least one re-initiation",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_06_S",
      "shell": "AE02",
      "title": "Treatment emergent adverse events leading to temporary interruption of study treatment, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_07_S",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events related to study treatment, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_08_S",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events with fatal outcome, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_09_PS",
      "shell": "AE02",
      "title": "Post-treatment adverse events with onset after EOT + 15 days, by system organ class (SOC) and preferred term",
      "population": "Post-treatment safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_10_S",
      "shell": "AE02",
      "title": "Treatment-emergent serious adverse events, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_11_S",
      "shell": "AE02",
      "title": "Treatment-emergent serious adverse events on Day 1, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_12_1R",
      "shell": "AE02",
      "title": "Treatment-emergent serious adverse events on day 1 of re-initiation, by system organ class (SOC) and preferred term",
      "population": "Subjects with at least one re-initiation",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_13_S",
      "shell": "AE02",
      "title": "Treatment emergent serious adverse events leading to study drug interruption, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_14_S",
      "shell": "AE02",
      "title": "Treatment-Emergent serious adverse events (SAE) with fatal outcome by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_15_S",
      "shell": "AE02",
      "title": "Treatment-Emergent serious adverse events (SAE) related to study treatment with fatal outcome by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_16_S",
      "shell": "AE02",
      "title": "Treatment-emergent serious adverse events related to study drug, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_17_PS",
      "shell": "AE02",
      "title": "Post-treatment serious adverse events with onset after EOT + 15 days, by system organ class (SOC) and preferred term",
      "population": "Post-treatment safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_18_S",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events leading to premature discontinuation of study drug, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_19_S",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events leading to premature discontinuation of study drug on Day 1, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_20_1R",
      "shell": "AE02",
      "title": "Treatment-emergent adverse events leading to premature discontinuation of study drug on Day 1 of re-initiation, by system organ class (SOC) and preferred term",
      "population": "Subjects with at least one re-initiation",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_21_S",
      "shell": "AE02",
      "title": "Treatment-emergent serious adverse events leading to premature discontinuation of study drug, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_22_S",
      "shell": "AE02",
      "title": "Treatment-emergent serious adverse events leading to premature discontinuation of study drug on Day 1, by system organ class (SOC) and preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_23_1R",
      "shell": "AE02",
      "title": "Treatment-emergent serious adverse events leading to premature discontinuation of study drug on Day 1 of re-initiation, by system organ class (SOC) and preferred term",
      "population": "Subjects with at least one re-initiation",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.",
      "id": "T_AE_24_S",
      "shell": "AE03",
      "title": "Treatment-emergent adverse events by preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.",
      "id": "T_AE_25_S",
      "shell": "AE03",
      "title": "Treatment-emergent adverse events related to study treatment by preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.",
      "id": "T_AE_26_S",
      "shell": "AE03",
      "title": "Treatment-emergent adverse events leading to premature discontinuation of study treatment by preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.",
      "id": "T_AE_27_S",
      "shell": "AE03",
      "title": "Treatment-emergent adverse events with fatal outcome by preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.",
      "id": "T_AE_28_S",
      "shell": "AE03",
      "title": "Treatment-Emergent serious adverse events by preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.",
      "id": "T_AE_29_S",
      "shell": "AE03",
      "title": "Treatment-Emergent serious adverse events related to study treatment by preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.",
      "id": "T_AE_30_S",
      "shell": "AE03",
      "title": "Treatment-Emergent serious adverse events leading to premature discontinuation of study treatment by preferred term",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_31_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Effect on heart rate and rhythm (including hypotension)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_32_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Effect on heart rate and rhythm (including hypotension) with onset on day 1",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_AE_33_1R",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Effect on heart rate and rhythm (including hypotension) with onset on day 1 of re-initiation",
      "population": "Subjects with at least one re-initiation",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_34_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Effect on heart rate and rhythm (including hypotension) with onset between day 2 of initial up-titration up to end of up-titration",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_35_1R",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Effect on heart rate and rhythm (including hypotension) with onset between day 2 of re-initiation and end of up-titration at re-initiation",
      "population": "Subjects with at least one re-initiation",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_36_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Effect on heart rate and rhythm (including hypotension) with onset during maintenance treatment (up to date of end of treatment + 15 days)",
      "population": "Safety Set, subset of subjects with at least one dose of maintainance study drug",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_37_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Cardiovascular events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_38_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Hypertension",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_39_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Hepatobiliary disorders / Liver enzyme abnormality",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_40_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Hepatobiliary disorders / Liver enzyme abnormality - only events with onset up to EOT + 1 day",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_41_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Pulmonary events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_42_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Macular edema",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_43_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Infection",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_44_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Herpetic infection",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_45_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Skin malignancy",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_46_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Non-skin malignancy",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_47_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Stroke",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by descending order of frequency in the ponesimod arm.|AESI - Adverse Event of special interest",
      "id": "T_AE_48_S",
      "shell": "AE03",
      "title": "Treatment-emergent AESI by preferred term: Seizure",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.",
      "id": "T_AE_49_S",
      "shell": "AE04",
      "title": "Treatment-emergent adverse events by maximum intensity",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Frequent refers to AEs reported in greater than or equal to five percent of subjects in at least one|treatment arm.|Percentages of subjects are based on the number of subjects in the safety analysis set (N).|Percentages of events are based on the total number of events.|System Organ Classes and Preferred Terms are based on MedDRA version 21.0.",
      "id": "T_AE_50_S",
      "shell": "AE05",
      "title": "Occurrence of non-serious frequent treatment-emergent adverse events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Percentages of subjects are based on the number of subjects in the safety analysis set (N).|Percentages of events are based on the total number of events.|System Organ Classes and Preferred Terms are based on MedDRA version 21.0.",
      "id": "T_AE_51_S",
      "shell": "AE05",
      "title": "Occurrence of treatment-emergent serious adverse events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_52_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Effect on heart rate and rhythm (including hypotension)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_53_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Cardiovascular events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_54_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Hypertension",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_55_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Hepatobiliary disorders / Liver enzyme abnormality",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_56_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Hepatobiliary disorders / Liver enzyme abnormality - only events with onset up to EOT + 1 day",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_57_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Pulmonary events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_58_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Macular edema",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_59_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Infection",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_60_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Herpetic infection",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_61_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Skin malignancy",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_62_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Non-skin malignancy",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_63_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Stroke",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_64_S",
      "shell": "AE06",
      "title": "Overview of Treatment-emergent AESI: Seizure",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Only events confirmed by the external independent MACE adjudication board are considered.|(a) Rate ratio and corresponding confidence intervals are based on Poisson regression.",
      "id": "T_AE_65_S",
      "shell": "AE07",
      "title": "Overview of treatment-emergent Major Adverse Cardiovascular Events (MACE)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_66_SC",
      "shell": "AE08",
      "title": "Adverse events with onset prior to first study drug intake, by system organ class (SOC) and preferred term",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "System Organ Classes and Preferred Terms are based on MedDRA version 21.0.|SOCs and preferred terms within SOCs are sorted by descending order of frequency in the ponesimod|arm.",
      "id": "T_AE_67_SC",
      "shell": "AE08",
      "title": "Serious adverse events with onset prior to first study drug intake, by system organ class (SOC) and preferred term",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0.|Preferred terms are sorted by absolute percent difference (descending) between ponesimod and|teriflunomide",
      "id": "T_AE_68_S",
      "shell": "AE09",
      "title": "Treatment-emergent adverse events by preferred term, sorted by absolute percent difference (descending) between ponesimod and teriflunomide",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version21.0.|(a) m corresponds to number of events, i.e. reported AE episodes.|(b) Annualized rate estimates from Poisson regression.|Preferred terms are sorted by descending rate ratio vs teriflunomide",
      "id": "T_AE_69_S",
      "shell": "AE10",
      "title": "Annualized event rates of treatment-emergent adverse events by preferred term, sorted by (descending) rate ratio between ponesimod and teriflunomide",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_70_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Effect on heart rate and rhythm (including hypotension)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_71_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Cardiovascular events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_72_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Hypertension",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_73_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Hepatobiliary disorders / Liver enzyme abnormality",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_74_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Pulmonary events",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_75_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Macular edema",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_76_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Infection",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_77_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Herpetic infection",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_78_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Skin malignancy",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_79_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Non-skin malignancy",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_80_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Stroke",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "AESI - Adverse Event of special interest",
      "id": "F_AE_81_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent AESI (Kaplan-Meier curves): Seizure",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "",
      "id": "F_AE_82_S",
      "shell": "FTTE02",
      "title": "Time to first treatment-emergent Major Adverse Cardiovascular Events (Kaplan-Meier curves)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_83_SC",
      "shell": "LAE01",
      "title": "Listing of adverse events",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. #=Treatment Emergent.|Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_84_SC",
      "shell": "LAE01",
      "title": "Listing of serious adverse events",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. #=Treatment Emergent.|Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_85_SC",
      "shell": "LAE01",
      "title": "Listing of serious adverse events (SAE) leading to hospitalization",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. #=Treatment Emergent.|Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_86_SC",
      "shell": "LAE01",
      "title": "Listing of serious adverse events (SAE) with fatal outcome",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_87_F",
      "shell": "LAE01",
      "title": "Listing of adverse events (AE) leading to premature discontinuation of study treatment",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_88_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Effect on heart rate and rhythm (including hypotension)",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_89_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Cardiovascular events",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_90_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Hypertension",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_91_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Hepatobiliary disorders / Liver enzyme abnormality",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_92_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Pulmonary events",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_93_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Macular edema",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_94_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Infection",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_95_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Herpetic infection",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_96_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Skin malignancy",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_97_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Non-skin malignancy",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_98_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Stroke",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. AESI=Adverse Event of special interest. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_99_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Seizure",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_100_F",
      "shell": "LAE01",
      "title": "Listing of AESI: Major Adverse Cardiovascular Events (MACE)",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred Terms are based on MedDRA version 21.0. #=Treatment Emergent. |Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.\n",
      "id": "L_AE_101_F",
      "shell": "To be provided",
      "title": "Listing of adverse events in subjects receiving incorrect study treatment during the study",
      "population": "Full Analysis Set: Subset of subjects who received incorrect study treatment during the study",
      "Pgmer": "CROS NT",
      "domain": "ADAE",
      "description": null
    },
    {
      "Footnote": "Preferred terms are based on MedDRA version 21.0.",
      "id": "T_DE_01_S",
      "shell": "DE01",
      "title": "Primary cause of death",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADDE",
      "description": null
    },
    {
      "Footnote": "Preferred terms are based on MedDRA version 21.0.",
      "id": "L_DE_02_SC",
      "shell": "LDE01",
      "title": "Listing of deaths",
      "population": "Screened Set",
      "Pgmer": "",
      "domain": "ADDE",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |SBP and DBP were to be measured twice. The average of the two measurements obtained at a visit is|used.",
      "id": "T_VS_01_S",
      "shell": "GE01",
      "title": "Blood pressure and body weight by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_VS_02_S",
      "shell": "GE01",
      "title": "Blood pressure on Day 1",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_VS_03_S",
      "shell": "GE01",
      "title": "Blood pressure on Day 1 of first re-initiation",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_VS_04_S",
      "shell": "GE02",
      "title": "Blood pressure and body weight incl. absolute change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_VS_05_S",
      "shell": "GE02",
      "title": "Blood pressure on Day 1 incl. absolute change from pre-dose/baseline",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_VS_06_S",
      "shell": "GE02",
      "title": "Blood pressure on Day 1 of first re-initiation incl. absolute change from pre-dose",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "The percentages are based on the number of subjects with at least one treatment-emergent measurement|available (n)",
      "id": "T_VS_07_S",
      "shell": "VS01",
      "title": "Treatment emergent blood pressure abnormalities",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "The percentages are based on the number of subjects with at least one post-dose measurement|available (n)|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_VS_08_S",
      "shell": "VS02",
      "title": "Blood pressure abnormalities (incl. decrease from pre-dose) on day 1 and day 1 of study drug re-initiation",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_VS_09_SC",
      "shell": "LVS02",
      "title": "Listing of vital signs:  body weight, body temperature, pulse rate",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "DBP=Diastolic Blood Pressure, SBP=Systolic Blood Pressure, #=Treatment-Emergent.|*=Baseline Value, '=Pre-dose value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.|LL: SBP<=90 and SBP change<=-20 or DBP<= 50 and DBP change<=-15. HH: SBP>=140 and SBP change>=20 or DBP>=90 and DBP|change>=15.",
      "id": "L_VS_10_SC",
      "shell": "LVS01",
      "title": "Listing of blood pressure measurements",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "DBP=Diastolic Blood Pressure, SBP=Systolic Blood Pressure, #=Treatment-Emergent.|*=Baseline Value, '=Pre-dose value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.|LL: SBP<=90 and SBP change<=-20 or DBP<= 50 and DBP change<=-15. HH: SBP>=140 and SBP change>=20 or DBP>=90 and DBP|change>=15.",
      "id": "L_VS_11_F",
      "shell": "LVS01",
      "title": "Listing of blood pressure measurements in subjects with at least one treatment-emergent marked abnormality in blood pressure measurements",
      "population": "Full analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADVS",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |Where applicable, results from pre-dose ECG are included",
      "id": "T_EG_01_S",
      "shell": "GE01",
      "title": "12-lead ECG measurements by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 is 2 mg.",
      "id": "T_EG_02_S",
      "shell": "GE01",
      "title": "12-lead ECG measurements at Day 1, by hour",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 of re-initiation is 2 mg.",
      "id": "T_EG_03_S",
      "shell": "GE01",
      "title": "12-lead ECG measurements at first re-intiation, by hour",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Where applicable, results from pre-dose ECG are included|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_EG_04_S",
      "shell": "GE02",
      "title": "12-lead ECG measurements incl. absolute change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 is 2 mg.",
      "id": "T_EG_05_S",
      "shell": "GE02",
      "title": "12-lead ECG measurements and absolute change from pre-dose/baseline at Day 1, by hour",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "As per up-titration regimen, the dose of ponesimod on Day 1 of re-initiation is 2 mg.",
      "id": "T_EG_06_S",
      "shell": "GE02",
      "title": "12-lead ECG measurements and absolute change from pre-dose at first re-intiation, by hour",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "The percentages are based on n (number of subjects with at least one treatment-emergent result|available for the corresponding parameter).|The most extreme result within a parameter is considered.|Confidence Limits are calculated using Pearson-Clopper method",
      "id": "T_EG_07_S",
      "shell": "EG01",
      "title": "Treatment-emergent PR and QTc prolongations (incl increase from baseline) and HR outliers",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "The percentages are based on n (number of subjects with at least one post-dose result available for|the corresponding parameter and occasion).|Subjects with multiple re-initiations are counted within a parameter with their most extreme result.|Confidence Limits are calculated using Pearson-Clopper method|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_EG_08_S",
      "shell": "EG01",
      "title": "Post-dose PR and QTc prolongations (incl. increase from pre-dose) and HR outliers at Day 1 and re-initiation",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "The percentages are based on n (number of subjects with (at least one) 3-hr post-dose result|available for the corresponding parameter).|Subjects with multiple re-initiations are counted within a parameter with their most extreme result.|Confidence Limits are calculated using Pearson-Clopper method|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_EG_09_S",
      "shell": "EG01",
      "title": "3-hours post-dose PR and QTc prolongations (incl increase from pre-dose) and HR outliers at Day 1, Week 12 visit, or re-initiation",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "(a) A finding is considered 'New' if not present at any assessment prior to start of study drug or|if no pre-treatment ECG is available.",
      "id": "T_EG_10_S",
      "shell": "EG02",
      "title": "Treatment-emergent morphological ECG findings",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "(a) A finding is considered 'New' if not present at any assessment prior to start of study drug or|if no pre-treatment ECG is available.|As per up-titration regimen, the dose of ponesimod on Day 1 (and Day 1 of re-initiation) is 2 mg.",
      "id": "T_EG_11_S",
      "shell": "EG02",
      "title": "Post-dose morphological ECG findings at any post-dose assessment on Day 1 or on day of re-initiation",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "(a) A finding is considered 'New' if not present at any assessment prior to start of study drug or|if no pre-treatment ECG is available.",
      "id": "T_EG_12_S",
      "shell": "EG02",
      "title": "Treatment-emergent morphological ECG findings at Week 2 Visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "#=Treatment-Emergent, Abn Abs: Absolute abnormality, Abn Chg: Change abnormality.\n|*=Baseline Value, '=Pre-dose value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.",
      "id": "L_EG_13_SC",
      "shell": "LEG01",
      "title": "Listing of 12-lead ECG measurments",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "#: Treatment-emergent finding, N: New not present pre-treatment, P: Pre-existing pre-treatment\n\n|*=Baseline Value, '=Pre-dose value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.",
      "id": "L_EG_14_SC",
      "shell": "LEG02",
      "title": "Listing of 12-lead ECG findings",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "#=Treatment-Emergent, Abn Abs: Absolute abnormality, Abn Chg: Change abnormality.\n|*=Baseline Value, '=Pre-dose value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.",
      "id": "L_EG_15_F",
      "shell": "LEG01",
      "title": "Listing of 12-lead ECG measurements in subjects with at least one treatment-emergent PR, QTc prolongation or HR outlier",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADEG",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_01_S",
      "shell": "GE01",
      "title": "Hematology laboratory results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_02_S",
      "shell": "GE01",
      "title": "Clinical chemistry (excl. Liver tests) laboratory results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_03_S",
      "shell": "GE01",
      "title": "Liver (incl coagulation) laboratory results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |Subjects from centers in Canada, the United States, and Mexico are exculded since they followed a|more sparse assessment schedule.",
      "id": "T_LB_04_S",
      "shell": "GE01",
      "title": "Liver (incl coagulation) laboratory results by visit (excluding data from centers in Canada, the United States, and Mexico)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_05_S",
      "shell": "GE02",
      "title": "Hematology laboratory results incl. absolute change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_06_S",
      "shell": "GE02",
      "title": "Clinical chemistry (excl. Liver tests) laboratory results incl. absolute change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_07_S",
      "shell": "GE02",
      "title": "Liver (incl coagulation) laboratory results incl. absolute change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |Subjects from centers in Canada, the United States, and Mexico are exculded since they followed a|more sparse assessment schedule.",
      "id": "T_LB_08_S",
      "shell": "GE02",
      "title": "Liver (incl coagulation) laboratory results incl. absolute change from baseline by visit (excluding data from centers in Canada, the United States, and Mexico)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_09_S",
      "shell": "GE02",
      "title": "Peripheral blood lymphocyte counts incl. absolute change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_LB_10_S",
      "shell": "GE02",
      "title": "Peripheral blood lymphocyte counts incl. percent change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "n presents the number of subjects with the defined abnormality reported at least once.|Nn - number of subjects with at least one valid treatment-emergent measurement available (from|scheduled or unscheduled visit).|Categories are not mutually exclusive.",
      "id": "T_LB_11_S",
      "shell": "LB01",
      "title": "Treatment-emergent marked laboratory abnormalities",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "(a) At the same sample date. |n presents the number of subjects with the defined elevation reported at least once.|Nn - number of subjects with at least one valid treatment-emergent measurement available (from|scheduled or unscheduled visit).",
      "id": "T_LB_12_S",
      "shell": "LB02",
      "title": "Treatment-emergent elevated liver function tests",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "(a) At the same sample date. |n presents the number of subjects with the defined elevation reported at least once.|Nn - number of subjects with at least one valid treatment-emergent measurement available (from|scheduled or unscheduled visit).",
      "id": "T_LB_13_S",
      "shell": "LB02",
      "title": "Treatment-emergent elevated liver function tests up to EOT + 1 day",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |SE=Standard Error.",
      "id": "F_LB_14_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) absolute changes from baseline in hematology laboratory results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |SE=Standard Error.",
      "id": "F_LB_15_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) absolute changes from baseline in clinical chemistry (excl. Liver tests) laboratory results by visit (all countries)",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |SE=Standard Error.",
      "id": "F_LB_16_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) absolute changes from baseline in liver (incl coagulation) laboratory results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |SE=Standard Error.",
      "id": "F_LB_17_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) peripheral blood lymphocyte counts by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |SE=Standard Error.",
      "id": "F_LB_18_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) absolute changes from baseline in peripheral blood lymphocyte counts by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Only central laboratory results are included.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |SE=Standard Error.",
      "id": "F_LB_19_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) percent changes from baseline in peripheral blood lymphocyte counts by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Data from central and local laboratories are included.|Peak values of total bilirubin may not be from the same assessment date as peak values of ALT",
      "id": "F_LB_20_S",
      "shell": "LB03",
      "title": "eDish plot of treatment-emergent peak values of total bilirubin vs peak values of ALT",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Data from central and local laboratories are included.|Peak values of total bilirubin may not be from the same assessment date as peak values of ALT",
      "id": "F_LB_21_S",
      "shell": "LB03",
      "title": "eDish plot of treatment-emergent peak values up to EOT + 1 day of total bilirubin vs peak values of ALT",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up, BL=Baseline.|H,L = values outside reference range (H = High, L = Low); HH, HHH, LL, LLL: Marked abnormalities; #: Treatment-emergent.",
      "id": "L_LB_22_SC",
      "shell": "LLB01",
      "title": "Listing of laboratory hematology data",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up, BL=Baseline.|H,L = values outside reference range (H = High, L = Low); HH, HHH, LL, LLL: Marked abnormalities; #: Treatment-emergent.",
      "id": "L_LB_23_F",
      "shell": "LLB01",
      "title": "Listing of laboratory hematology data in subjects with at least one treatment emergent abnormality per parameter",
      "population": "Full analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up, BL=Baseline.|H,L = values outside reference range (H = High, L = Low); HH, HHH, LL, LLL: Marked abnormalities; #: Treatment-emergent.",
      "id": "L_LB_24_SC",
      "shell": "LLB01",
      "title": "Listing of laboratory clinical chemistry (excl. liver tests) data",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up, BL=Baseline.|H,L = values outside reference range (H = High, L = Low); HH, HHH, LL, LLL: Marked abnormalities; #: Treatment-emergent.",
      "id": "L_LB_25_F",
      "shell": "LLB01",
      "title": "Listing of laboratory clinical chemistry data in subjects with at least one treatment emergent abnormality per parameter",
      "population": "Full analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up, BL=Baseline.|H,L = values outside reference range (H = High, L = Low); HH, HHH, LL, LLL: Marked abnormalities; #: Treatment-emergent.",
      "id": "L_LB_26_SC",
      "shell": "LLB01",
      "title": "Liver (incl coagulation) laboratory data",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.|#: Treatment-emergent.",
      "id": "L_LB_27_SC",
      "shell": "LLB02",
      "title": "Listing of laboratory urinalysis data",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_LB_28_SC",
      "shell": "LLB03",
      "title": "Listing of other laboratory data",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "#=Treatment Emergent. \n|*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.\nH,L = values outside reference|range (H = High, L = Low); HH, HHH, LL, LLL: Marked abnormalities.|Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT.",
      "id": "L_LB_29_F",
      "shell": "LLB04",
      "title": "Listing of liver (incl coagulation) laboratory results in subjects with treatment-emergent hepatobiliary disorders / Liver enzyme abnormality AESI",
      "population": "Full analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.|H,L = values outside reference range (H = High, L = Low); HH, HHH, LL, LLL: Marked abnormalities.",
      "id": "L_LB_30_F",
      "shell": "LLB05",
      "title": "Listing of Liver (incl coagulation) laboratory results in subjects with treatment emergent abnormalties for both ALT (> 3 ULN) and Total Bilirubin (> 2 ULN)",
      "population": "Full analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADLB",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |Only best efforts are considered. |Acceptable (incl. borderline acceptable) tests are preferred over tests rated unacceptable.",
      "id": "T_RE_1_S",
      "shell": "GE01",
      "title": "Spirometry results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_RE_2_S",
      "shell": "GE02",
      "title": "Spirometry results results incl. percent change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_RE_3_S",
      "shell": "GE02",
      "title": "Spirometry results results incl. absolute change from baseline by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |SE=Standard Error.",
      "id": "F_RE_04_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) absolute changes from baseline in spirometry results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |SE=Standard Error.",
      "id": "F_RE_05_S",
      "shell": "GE04",
      "title": "Mean (+/- SE) percent changes from baseline in spirometry results by visit",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Regression equation - ponesimod: [parameter] = [intercept estimand] + [slope estimand] * days on treatment [unit] |Regression equation - teriflunomide: [parameter] = [intercept estimand] + [slope estimand] * days on treatment [unit] |Only treatment-emergent results from assessments after study day 25 are included for linear regression|Data from scheduled and unscheduled assessments are included.",
      "id": "F_RE_06_S",
      "shell": "RE01",
      "title": "Linear regression of treatment-emergent percent predicted Forced Expiratory Volume in 1 Second [FEV1]",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "A subject is counted in each category where criterion is met at least once for any treatment-emergent measurement|(scheduled and unscheduled)",
      "id": "F_RE_07_S",
      "shell": "RE02",
      "title": "Treatment-emergent low spirometry results",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "FEV1- forced expiratory volume in 1 second, FVC - forced vital capacity|CfB - change from Baseline (negative numbers represent decrease)|Last follow-up: last assessment between EOT + 8 and EOT + 37 days. |Percentages for reversibility are out subjects with large decrease, i.e. change from baseline to last on-treatment <=|-200 mL or <= -12 %.",
      "id": "F_RE_08_S",
      "shell": "RE03",
      "title": "Reversibility of large decreases from baseline in FEV1 or FVC at the last on-treatment asessment to the last follow-up asessment",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Data from scheduled and unscheduled assessments are included.|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Last follow-up: last assessment between EOT + 8 and EOT + 37 days.",
      "id": "F_RE_09_S",
      "shell": "RE04",
      "title": "Scatterplot of individual absolute change from baseline to last assessment on treatment versus absolute change from baseline to last follow-up assessment in spirometry results",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Baseline: Last value prior first study drug intake.|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.|Only subjects with a data available at all timepoints are included.",
      "id": "F_RE_10_S",
      "shell": "RE05",
      "title": "Box-and-whisker plot of spirometry results at baseline, last on-treatment, and Day-15 follow-up",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Baseline: Last value prior first study drug intake.|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug|intake.|Only subjects with a data available at all timepoints are included.",
      "id": "T_RE_11_S",
      "shell": "GE01",
      "title": "Spirometry results at baseline, last on-treatment, and Day-15 follow-up",
      "population": "Safety Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up, #=Treatment-emergent,|BL=Baseline.|Rating: (1) Acceptable, (2) Borderline acceptable, (3) Unacceptable.",
      "id": "L_RE_12_SC",
      "shell": "LRE01",
      "title": "Listing of spirometry data",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up, #=Treatment-emergent,|BL=Baseline.|Rating: (1) Acceptable, (2) Borderline acceptable, (3) Unacceptable.",
      "id": "L_RE_13_F",
      "shell": "LRE01",
      "title": "Listing of spirometry data in subjects with treatment-emergent decrease ? 200 mL or ? 12%",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Action Taken: (1) DOSE NOT CHANGED, (2) DRUG INTERRUPTED, (3) DRUG WITHDRAWN, (4) NOT APPLICABLE, (5) UNKNOWN\nOutcome:|(1) RECOVERED/RESOLVED, (2) RECOVERED/RESOLVED WITH SEQUELAE, (3) NOT RECOVERED/NOT RESOLVED, (4) FATAL, \n(6) UNKNOWN,|(6) WORSENING OF INTENSITY/SERIOUSNESS AFTER START OF STUDY TREATMENT. \n|#=Treatment Emergent. \n*=Baseline Value, **=Last Value on Treatment, F1=Day-15 follow-up, F2=Day-30 follow-up.",
      "id": "L_RE_14_F",
      "shell": "LRE02",
      "title": "Listing of spirometry data in subjects with treatment-emergent pulmonary AESI",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADRE",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_DL_01_D",
      "shell": "GE01",
      "title": "Measures of diffusing capacity for the lungs by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |Only asessments graded acceptable are considered for analysis.",
      "id": "T_DL_02_D",
      "shell": "GE01",
      "title": "Acceptable measures of diffusing capacity for the lungs by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_DL_03_D",
      "shell": "GE02",
      "title": "Measures of diffusing capacity for the lungs results incl. percent change from baseline by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |Only asessments graded acceptable are considered for analysis.",
      "id": "T_DL_04_D",
      "shell": "GE02",
      "title": "Acceptable measures of diffusing capacity for the lungs results incl. percent change from baseline by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included.",
      "id": "T_DL_05_D",
      "shell": "GE02",
      "title": "Measures of diffusing capacity for the lungs results incl. absolute change from baseline by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only|treatment-emergent results are included. |Only asessments graded acceptable are considered for analysis.",
      "id": "T_DL_06_D",
      "shell": "GE02",
      "title": "Acceptable measures of diffusing capacity for the lungs results incl. absolute change from baseline by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake. Only asessments graded acceptable are considered|for analysis. |Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |SE=Standard Error.",
      "id": "F_DL_07_D",
      "shell": "GE04",
      "title": "Mean (+/- SE) absolute changes from baseline in acceptable measures of diffusing capacity for the lungs by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |SE=Standard Error.",
      "id": "F_DL_08_D",
      "shell": "GE04",
      "title": "Mean (+/- SE) absolute changes from baseline in measures of diffusing capacity for the lungs by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake.|Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |SE=Standard Error.",
      "id": "F_DL_09_D",
      "shell": "GE04",
      "title": "Mean (+/- SE) percent changes from baseline in measures of diffusing capacity for the lungs by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline is defined as the last value prior first study drug intake. Only asessments graded acceptable are considered|for analysis. |Except for data summarized under Baseline, Day-15 follow-up and Day-30 follow-up, only treatment-emergent results are|included. |Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |SE=Standard Error.",
      "id": "F_DL_10_D",
      "shell": "GE04",
      "title": "Mean (+/- SE) percent changes from baseline in acceptable measures of diffusing capacity for the lungs by visit",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Regression equation - ponesimod: [parameter] = [intercept estimand] + [slope estimand] * days on treatment [unit] |Regression equation - teriflunomide: [parameter] = [intercept estimand] + [slope estimand] * days on treatment [unit] |Only treatment-emergent results from assessments after study day 25 are included for linear regression|Data from scheduled and unscheduled assessments are included.",
      "id": "F_DL_11_D",
      "shell": "RE01",
      "title": "Linear regression of treatment-emergent percent predicted DLCO",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Data from scheduled and unscheduled assessments are included.|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Last follow-up: Last available value assessed between 8 and 37 days after last study drug intake.",
      "id": "F_DL_12_D",
      "shell": "RE04",
      "title": "Scatterplot of individual absolute change from baseline to last assessment on treatment versus absolute change from baseline to last follow-up assessment in measures of diffusing capacity for the lungs",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline: Last value prior first study drug intake.|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.|Only subjects with a data available at all timepoints are included.",
      "id": "F_DL_13_D",
      "shell": "RE05",
      "title": "Box-and-whisker plot of measures of diffusing capacity for the lungs at baseline, last on-treatment, and Day-15 follow-up",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Baseline: Last value prior first study drug intake.|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug|intake.|Only subjects with a data available at all timepoints are included.",
      "id": "T_DL_14_D",
      "shell": "GE01",
      "title": "Measures of diffusing capacity for the lungs at baseline, last on-treatment, and Day-15 follow-up",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "A subject is counted in each category where criterion is met at least once for any|treatment-emergent measurement (scheduled and unscheduled)",
      "id": "T_DL_15_D",
      "shell": "RE06",
      "title": "Treatment-emergent low measures of diffusing capacity for the lungs",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "A subject is counted in each category where criterion is met at least once for any|treatment-emergent measurement (scheduled and unscheduled)|Only asessments graded acceptable are considered for analysis.",
      "id": "T_DL_16_D",
      "shell": "RE06",
      "title": "Treatment-emergent low acceptable measures of diffusing capacity for the lungs",
      "population": "DLco sub-study safety analysis set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_DL_17_SC",
      "shell": "LRE03",
      "title": "Listing of measures of diffusing capacity for the lungs data (derived mean values)",
      "population": "Screened Set",
      "Pgmer": "CROS NT",
      "domain": "ADDL",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included.",
      "id": "T_PD_01_S",
      "shell": "PD01",
      "title": "Nadir treatment-emergent peripheral blood lymphocyte counts - frequency distribution",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data available at all|timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.",
      "id": "F_PD_02_S",
      "shell": "RE05",
      "title": "Box-and-whisker plot of peripheral blood lymphocyte counts at baseline, last on-treatment, and Day-15 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data available at all|timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.",
      "id": "F_PD_03_S",
      "shell": "RE05",
      "title": "Box-and-whisker plot of percent change from baseline in peripheral blood lymphocyte counts at baseline, last on-treatment, and Day-15 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data available at all|timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.",
      "id": "F_PD_04_S",
      "shell": "RE05",
      "title": "Box-and-whisker plot of peripheral blood lymphocyte counts at baseline, last on-treatment, and Day-15 and Day-30 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data available at all|timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.",
      "id": "F_PD_05_S",
      "shell": "RE05",
      "title": "Box-and-whisker plot of absolute change from baseline in peripheral blood lymphocyte counts at baseline, last on-treatment, and Day-15 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data available at all|timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.",
      "id": "F_PD_06_S",
      "shell": "RE05",
      "title": "Box-and-whisker plot of percent change from baseline in peripheral blood lymphocyte counts at baseline, last on-treatment, and Day-15 and Day-30 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data|available at all timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug|intake.|Only subjects with a data available at all timepoints are included.",
      "id": "T_PD_07_S",
      "shell": "GE01",
      "title": "Peripheral blood lymphocyte counts (incl. change from baseline) at baseline, last on-treatment, and Day-15 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data|available at all timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug|intake.|Only subjects with a data available at all timepoints are included.",
      "id": "T_PD_08_S",
      "shell": "GE01",
      "title": "Peripheral blood lymphocyte counts (incl. change from baseline) at baseline, last on-treatment, and Day-15 and Day-30 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. Only subjects with a data available at all|timepoints are included.|Baseline: Last value prior first study drug intake|Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Boxes indicate the interquartile range, the horizontal line within the box indicates the median, the cross indicates the|mean. Whiskers |denote minimum and maximum values within the boundary of +/- 1.5 times the size of the interquartile range. Circles and|diamonds indicate |outliers from +/- 1.5 times the size of the interquartile range, where diamond indicates observations falling outside|the displayed range.",
      "id": "F_PD_09_S",
      "shell": "RE05",
      "title": "Box-and-whisker plot of absolute change from baseline in peripheral blood lymphocyte counts at baseline, last on-treatment, and Day-15 and Day-30 follow-up",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. |Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Last follow-up: last assessment between EOT + 8 and EOT + 37 days.",
      "id": "F_PD_010_S",
      "shell": "RE04",
      "title": "Scatterplot of individual absolute change from baseline to last assessment on treatment versus absolute change from baseline to last follow-up asessment in peripheral blood lymphocyte count",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "Only central laboratory results (scheduled and unscheduled) are included. |Last on treatment: Latest treatment-emergent assessment prior to or on the day after last study drug intake.|Last follow-up: last assessment between EOT + 8 and EOT + 37 days.",
      "id": "F_PD_11_S",
      "shell": "RE04",
      "title": "Scatterplot of individual percent change from baseline to last assessment on treatment versus percent change from baseline to end of study in peripheral blood lymphocyte count",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPD",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_PE_01_",
      "shell": "",
      "title": "Listing of physical and dermatological examination",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPE",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_PE_02_",
      "shell": "",
      "title": "Listing of OCT and Ophtalmological examination",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADPE",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T__01_",
      "shell": "Will come later",
      "title": "Testing strategy: Overview of results",
      "population": "",
      "Pgmer": "",
      "domain": "AD",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed relapses per year), Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.|Offset: Log Time (years) up to EOS. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of|relapses in year prior to randomization (? 2 or <=1 incl. missing).",
      "id": "T_REL1_01_F",
      "shell": "NegBin00",
      "title": "Confirmed relapses up to EOS - Anualized relapse rate from Negative binomial regression (Primary analysis)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Negative binomial model is applied with Wald confidence intervals and p-value.",
      "id": "F_REL1_02_F",
      "shell": "FNegBin01",
      "title": "Confirmed relapses up to EOS - Anualized relapse rate from Negative binomial regression (Primary analysis)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL2_01_F",
      "shell": "Count02",
      "title": "Confirmed relapses up to EOS - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed relapses per year), Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to EOS. |Unadjusted=No adjustments for covariates is performed.",
      "id": "T_REL2_02_F",
      "shell": "NegBin04",
      "title": "Confirmed relapses up to EOS - Anualized relapse rate from Negative binomial regression - unadjusted analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL2_03_F",
      "shell": "NegBin03",
      "title": "Confirmed relapses up to EOS - Anualized relapse rate from Negative binomial regression with treatment covariate interaction",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed relapses per year), Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to EOS. |Covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last 2Â years prior to randomization|(Y/N) as derived from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1 incl.|missing).",
      "id": "T_REL2_04_F",
      "shell": "NegBin00",
      "title": "Confirmed relapses up to EOS - Anualized relapse rate from Negative binomial regression - adjusted for derived stratification variables",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "n(pon)=No. of subjects in ponesimod group, rate(pon)= mean rate in ponesimod group, n(ter)=No. of subjects in|teriflunomide group, rate(ter)=mean rate in teriflunomide group.|The vertical solid line references the treatment effect from the main analyis. Negative binomial model is applied with|Wald confidence intervals, offset: log time (years) up to EOS.|The main analysis is adjusted for the following covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last|2Â years prior to randomization (Y/N) as derived from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1|incl. missing).",
      "id": "F_REL2_05_F",
      "shell": "FORNB02",
      "title": "Confirmed relapses up to EOS - Overview of main and sensitivity analyses (Forest plot with 99% CI)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "n(pon)=No. of subjects in ponesimod group, rate(pon)= mean rate in ponesimod group, n(ter)=No. of subjects in|teriflunomide group, rate(ter)=mean rate in teriflunomide group.|The vertical solid line references the treatment effect from the main analyis. Negative binomial model is applied with|Wald confidence intervals, offset: log time (years) up to EOS.|The main analysis is adjusted for the following covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last|2Â years prior to randomization (Y/N) as derived from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1|incl. missing).",
      "id": "F_REL2_06_F",
      "shell": "FORNB02",
      "title": "Confirmed relapses up to EOS - Overview of main and sensitivity analyses (Forest plot with 95% CI)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed relapses per year), Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to EOT + 7 days. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of|relapses in year prior to randomization (? 2 or <=1 incl. missing).",
      "id": "T_REL3_01_F",
      "shell": "NegBin00",
      "title": "Confirmed relapses up to EOT+7 days - Anualized relapse rate from Negative binomial regression",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapses occuring after per protocol exclusion date are excluded from analysis Mean estimate =|Anualized relapse rate (Confirmed relapses per year), Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative|binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to EOS or per protocol exclusion date. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of|relapses in year prior to randomization (? 2 or <=1 incl. missing).",
      "id": "T_REL3_02_P",
      "shell": "NegBin00",
      "title": "Confirmed relapses up to EOS (Per protocol)  - Anualized relapse rate from Negative binomial regression",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed or unconfirmed relapses per year), Rate Ratio:|Ponesimod vs. Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and|p-value.\n |Offset: Log Time (years) up to EOS. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of|relapses in year prior to randomization (? 2 or <=1 incl. missing).",
      "id": "T_REL3_03_F",
      "shell": "NegBin00",
      "title": "All relapses up to EOS - Anualized relapse rate from Negative binomial regression",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed relapses per year), Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to start of new DMT for MS or EOS. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of|relapses in year prior to randomization (? 2 or <=1 incl. missing).",
      "id": "T_REL3_04_F",
      "shell": "NegBin00",
      "title": "Confirmed relapses up to start of new disease modifying therapy (DMT) for MS - Anualized relapse rate from Negative binomial regression",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed or unconfirmed relapses per year), Rate Ratio:|Ponesimod vs. Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and|p-value.\n |Offset: Log Time (years) from EOT + 7 days up to EOS. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of|relapses in year prior to randomization (? 2 or <=1 incl. missing).",
      "id": "T_REL3_05_PS",
      "shell": "NegBin00",
      "title": "Confirmed relapses post EOT + 7 days following premature treatment discontinuation - Anualized relapse rate from Negative binomial regression",
      "population": "Post-treatment observation period analysis set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "n(pon)=No. of subjects in ponesimod group, rate(pon)= mean rate in ponesimod group, n(ter)=No. of subjects in|teriflunomide group, rate(ter)=mean rate in teriflunomide group.|Negative binomial model is applied with Wald confidence intervals, Offset: log time (years) considered for analysis.|Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of relapses in year|prior to randomization (? 2 or <=1 incl. missing).",
      "id": "F_REL3_06_F",
      "shell": "FORNB02",
      "title": "Relapses: Overview of main and supplementary analyses (Forest plot with 99% CI)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "n(pon)=No. of subjects in ponesimod group, rate(pon)= mean rate in ponesimod group, n(ter)=No. of subjects in|teriflunomide group, rate(ter)=mean rate in teriflunomide group.|Negative binomial model is applied with Wald confidence intervals, Offset: log time (years) considered for analysis.|Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Number of relapses in year|prior to randomization (? 2 or <=1 incl. missing).",
      "id": "F_REL3_07_F",
      "shell": "FORNB02",
      "title": "Relapses: Overview of main and supplementary analyses (Forest plot with 95% CI)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapses from EOT+7 days to EOS are imputed based on the estimated treatment effect in the control|arm.",
      "id": "T_REL4_01_F",
      "shell": "Will come later",
      "title": "Confirmed relapses up to EOS - Hypothetical analysis assuming identical effect in both treatment arms following treatment discontinuation (Multiple imputation from EOT + 7 days to EOS)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapse rate on each treatment arm following premature EOS to Week 108  is assumed to follow the|event rate from the respective estimated effect in the primary analysis (missing at random assumption).",
      "id": "T_REL4_02_F",
      "shell": "Will come later",
      "title": "Confirmed relapses up to Week 108 - Hypothetical analysis assuming treatment effect  following study discontinuation follows estimated effect up to EOS per treatment arm (Multiple impuation from EOS to Week 108)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapse rate on ponesimod arm following premature EOS to Week 108 is assumed to follow the estimaed|event rate from the ponesimod arm from the primary analysis.",
      "id": "T_REL4_03_F",
      "shell": "Will come later",
      "title": "Confirmed relapses up to Week 108 - Hypothetical analysis assuming no relapses on teriflunomide following study discontinuation (Multiple impuation from EOS to Week 108)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapse rate on both treatment arms following premature EOS to Week 108  is assumed to follow the|event rate from the arm with lower estimated effect in the primary analysis.",
      "id": "T_REL4_04_F",
      "shell": "Will come later",
      "title": "Confirmed relapses up to Week 108 - Hypothetical analysis assuming no treatment effect following study discontinuation (Multiple impuation from EOS to Week 108)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL5_01_F",
      "shell": "Count02",
      "title": "Confirmed relapses up to EOT + 7 days - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed relapses per year), Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to EOT + 7 days. |Unadjusted=No adjustments for covariates is performed.",
      "id": "T_REL_01_F",
      "shell": "NegBin04",
      "title": "Confirmed relapses up to EOT + 7 days - Anualized relapse rate from Negative binomial regression - unadjusted analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapses occuring after per protocol exclusion date are excluded from analysis.",
      "id": "T_REL5_01_P",
      "shell": "Count02",
      "title": "Confirmed relapses up to EOS (Per protocol) - Descriptive statistics",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL5_02_F",
      "shell": "Count02",
      "title": "All relapses up to EOS - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Anualized relapse rate (Confirmed and unconfirmed relapses per year), Rate Ratio:|Ponesimod vs. Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and|p-value. |Offset: Log Time (years) up to EOS. |Covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last 2Â years prior to randomization|(Y/N) as derived from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1 incl.|missing).",
      "id": "T_REL5_03_F",
      "shell": "NegBin00",
      "title": "All relapses up to EOS - Anualized relapse rate from Negative binomial regression - adjusted for derived stratification variables",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL5_04_F",
      "shell": "Count02",
      "title": "Confirmed relapses up to start of new disease modifying therapy (DMT) for MS - Descriptive Statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "p*=Interaction p-value, n(pon)=No. of subjects in ponesimod group, rate(pon)=mean rate in ponesimod group, n(ter)=No. of|subjects in teriflunomide group, rate(ter)=mean rate in teriflunomide group.|Negative binomial model is applied with Wald confidence intervals, offset: log time (years) up to EOS, in each subgroup|separately. Interaction p-value from likelihood ratio test of interaction term in model with treatment, subgroup, and|treatment by subgroup interactions. |The vertical solid line references the treatment effect from the main analyis. The main analysis is adjusted for the|following covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last 2Â years prior to randomization (Y/N) as|derived from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1 incl. missing). |Analyses in subgroups are not adjusted for covariates.",
      "id": "F_REL6_01_",
      "shell": "FORNB01",
      "title": "Confirmed relapses up to EOS - Subgroup analysis (99% CI)",
      "population": "Full Analyiss set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean rate = Anualized relapse rate. RR = Rate ratio, M = number of subjects in analysis, C = number|of confirmed relapses, Total time = Cumulative time up to EOS.  \np* = Interaction p-values|(two-sided) are presented. |Negative binomial model is applied with Wald confidence intervals, offset: log time (years) up to|EOS, in each subgroup separately. Interaction p-value from likelihood ratio test of interaction term|in model with treatment, subgroup, and treatment by subgroup interactions.",
      "id": "T_REL6_02_",
      "shell": "NBSUB01",
      "title": "Confirmed relapses up to EOS - Subgroup analysis (99% CI)",
      "population": "Full Analyiss set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapses occuring after per protocol exclusion date are excluded from analysis. p*=Interaction p-value,  n(pon)=No. of|subjects in ponesimod group, rate(pon)=mean rate in ponesimod group, n(ter)=No. of subjects in teriflunomide group,|rate(ter)=mean rate in teriflunomide group.|Negative binomial model is applied with Wald confidence intervals, offset:log time (years) up to EOS / per protocol|exclusion dat, in each subgroup separately. Interaction p-value from likelihood ratio test of interaction term in model with|treatment, subgroup, and treatment by subgroup interactions. |The vertical solid line references the treatment effect from the main Per-Protocol analyis and is adjusted for the|following covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last 2Â years prior to randomization (Y/N) as derived|from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1 incl. missing). |Analyses in subgroups are not adjusted for covariates.",
      "id": "F_REL6_03_P",
      "shell": "FORNB01",
      "title": "Confirmed relapses up to EOS (Per protocol)  - Subgroup analysis (99% CI)",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapses occuring after per protocol exclusion date are excluded from analysis.  Mean rate =|Anualized relapse rate. RR = Rate ratio, M = number of subjects in analysis, C = number of confirmed|relapses, Total time = Cumulative time up to EOS or per protocol exclusion.  \np* = Interaction p-values (two-sided) are presented. |Negative binomial model is applied with Wald confidence intervals, offset:log time (years) up to EOS|/ per protocol exclusion dat, in each subgroup separately. Interaction p-value from likelihood|ratio test of interaction term in model with treatment, subgroup, and treatment by subgroup interactions.",
      "id": "T_REL6_04_P",
      "shell": "NBSUB01",
      "title": "Confirmed relapses up to EOS (Per protocol)  - Subgroup analysis (99% CI)",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "p*=Interaction p-value,  n(pon)=No. of subjects in ponesimod group, rate(pon)=mean rate in ponesimod group, n(ter)=No.|of subjects in teriflunomide group, rate(ter)=mean rate in teriflunomide group.|Negative binomial model is applied with Wald confidence intervals, offset: log time (years) up to EOS, in each subgroup|separately. Interaction p-value from likelihood ratio test of interaction term in model with treatment, subgroup, and|treatment by subgroup interactions. |The vertical solid line references the treatment effect from the main analyis. The main analysis is adjusted for the|following covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last 2Â years prior to randomization (Y/N) as|derived from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1 incl. missing). |Analyses in subgroups are not adjusted for covariates.",
      "id": "F_REL6_05_",
      "shell": "FORNB01",
      "title": "Confirmed relapses up to EOS - Subgroup analysis (95% CI)",
      "population": "Full Analyiss set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Mean rate = Anualized relapse rate. RR = Rate ratio, M = number of subjects in analysis, C = number|of confirmed relapses, Total time = Cumulative time up to EOS.  |Negative binomial model is applied with Wald confidence intervals, offset: log time (years) up to|EOS, in each subgroup separately. Interaction p-value from likelihood ratio test of interaction term|in model with treatment, subgroup, and treatment by subgroup interactions.",
      "id": "T_REL6_06_",
      "shell": "NBSUB01",
      "title": "Confirmed relapses up to EOS - Subgroup analysis (95% CI)",
      "population": "Full Analyiss set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapses occuring after per protocol exclusion date are excluded from analysis. p*=Interaction p-value,  n(pon)=No. of|subjects in ponesimod group, rate(pon)=mean rate in ponesimod group, n(ter)=No. of subjects in teriflunomide group,|rate(ter)=mean rate in teriflunomide group.|Negative binomial model is applied with Wald confidence intervals, offset:log time (years) up to EOS / per protocol|exclusion dat, in each subgroup separately. Interaction p-value from likelihood ratio test of interaction term in model with|treatment, subgroup, and treatment by subgroup interactions. |The vertical solid line references the treatment effect from the main Per-Protocol analyis and is adjusted for the|following covariates: EDSS (<3.5,>=3.5) as derived from eCRF, DMT within last 2Â years prior to randomization (Y/N) as derived|from eCRF, and Number of relapses in year prior to randomization (? 2 or <=1 incl. missing). |Analyses in subgroups are not adjusted for covariates.",
      "id": "F_REL6_07_P",
      "shell": "FORNB01",
      "title": "Confirmed relapses up to EOS (Per protocol)  - Subgroup analysis (95% CI)",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Relapses occuring after per protocol exclusion date are excluded from analysis.  Mean rate =|Anualized relapse rate. RR = Rate ratio,M = number of subjects in analysis, C = number of confirmed|relapses, Total time = Cumulative time up to EOS or per protocol exclusion.  \np* = Interaction p-values (two-sided) are presented. |Negative binomial model is applied with Wald confidence intervals, offset:log time (years) up to EOS|/ per protocol exclusion dat, in each subgroup separately. Interaction p-value from likelihood|ratio test of interaction term in model with treatment, subgroup, and treatment by subgroup interactions.",
      "id": "T_REL6_08_P",
      "shell": "NBSUB01",
      "title": "Confirmed relapses up to EOS (Per protocol)  - Subgroup analysis (95% CI)",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_REL7_01_F",
      "shell": "LREL01",
      "title": "Listing of relapses",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_REL7_02_F",
      "shell": "LREL02",
      "title": "Listing of number of relapses",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_REL7_03_F",
      "shell": "LREL03",
      "title": "Listing of MS symptoms (by relapse)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "n refers to number of relapses. |Only relapses with available relapse duration are considered.",
      "id": "T_REL7_04_F",
      "shell": "RELD02",
      "title": "Duration of relapses",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Percentages in subjects column are out of N, Percentages in relapses columns are out of total number|of relapses.",
      "id": "T_REL7_05_F",
      "shell": "RELD01",
      "title": "Relapse characteristics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Percentages are displayed out of total number of relapses.",
      "id": "T_REL7_06_F",
      "shell": "RELD03",
      "title": "Relapse symptoms",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL7_07_F",
      "shell": "Count02",
      "title": "Confirmed relapses up to Week 60 and post Week 60 - Descriptive Statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL7_08_F",
      "shell": "Count02",
      "title": "Confirmed relapses by time periods - Descriptive Statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL7_09_F",
      "shell": "NegBin05",
      "title": "Confirmed relapses up to Week 60 and post Week 60 - Statistical analysis by period",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Negative binomial model is applied with Wald confidence intervals for each time period separately.",
      "id": "T_REL7_10_F",
      "shell": "NegBin05",
      "title": "Confirmed relapses up to EOS - Statistical analysis by time periods",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Negative binomial model is applied with Wald confidence intervals for each time period separately.",
      "id": "F_REL7_11_F",
      "shell": "FNegBin01",
      "title": "Confirmed relapses up to EOS - Statistical analysis by time periods",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Reports new or worsening of acute neurological symptoms as recorded on the relapse assessment|questionnaire. \n|For sub-categories of neurological symptoms percentages are out of total number of new or worsening|neurological symptoms. \n|Relapses not reported as neurological symptom are not included.",
      "id": "T_REL7_12_F",
      "shell": "RELD04",
      "title": "Number of new or worsening neurological symptoms up to EOS",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Includes cumulative unique active lesions collected from baseline up to the respective time point,|including results from MRI scans at premature end of treatment or unscheduled visits. |Subjects with missing Week 60 or Week 108 MRI scan have cumulative unique active lesions up to that|time point displayed.",
      "id": "T_MRI_CUAL_01_F",
      "shell": "Count02",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to Week 60 and Week 108  - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Includes cumulative unique active lesions collected from baseline up to the respective time point,|including results from MRI scans at premature end of treatment or unscheduled visits. |Subjects with missing Week 60 or Week 108 MRI scan have cumulative unique active lesions up to that|time point displayed. |Only results up to EOT + 7 days are included.",
      "id": "T_MRI_CUAL_02_F",
      "shell": "Count02",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to Week 60 and Week 108 up to EOT + 7 days - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = CUALs per year, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial model is|applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to last MRI scan. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .",
      "id": "T_MRI_CUAL_03_F",
      "shell": "NegBin01",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to Week 108  - Statistical Analysis (Negative binomial regression) of lesions per year - Main analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = CUALs per year, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial model is|applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to last MRI scan considered. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .",
      "id": "T_MRI_CUAL_04_F",
      "shell": "NegBin01",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to EOT + 7 days  - Statistical Analysis (Negative binomial regression) of lesions per year - Main analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = CUALs per year, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial model is|applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to last MRI scan considered. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .  |Subjects developing major protocol deviations during the study have data excluded from the|respective date onwards.",
      "id": "T_MRI_CUAL_05_P",
      "shell": "NegBin01",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to Week 108 - Per Protocol  - Statistical Analysis (Negative binomial regression) of lesions per year - Main analysis",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "n(pon)=No. of subjects in ponesimod group, rate(pon)= mean rate in ponesimod group, n(ter)=No. of subjects in|teriflunomide group, rate(ter)=mean rate in teriflunomide group.|Negative binomial model is applied with Wald confidence intervals, offset: log time (years) up to EOS.|The vertical solid line references the treatment effect from the main analyis. The main analysis is adjusted for the|following covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1 lesions at|baseline (absent or present). |Analyses in subgroups are not adjusted for covariates.",
      "id": "F_MRI_CUAL_06_F",
      "shell": "FORNB02",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to Week 108 - Subgroup analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean rate = Anualized relapse rate. RR = Rate ratio, M = number of subjects in analysis, C = number|of cumulative unique active lesions, Total time = Cumulative time up to last MRI scan.  \np* =|Interaction p-values (two-sided) are presented. |Negative binomial model is applied with Wald confidence intervals, offset: log time (years) up to|last MRI scan, in each subgroup separately. Interaction p-value from likelihood ratio test of|interaction term in model with treatment, subgroup, and treatment by subgroup interactions.",
      "id": "T_MRI_CUAL_07_F",
      "shell": "NBSUB01",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to Week 108 - Subgroup analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = CUALs per year, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial model is|applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years) up to last MRI scan considered. |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .",
      "id": "T_MRI_CUAL_08_F",
      "shell": "NegBin01",
      "title": "Cumulative number of unique active lesions (CUALs) from baseline to Week 60  - Statistical Analysis (Negative binomial regression) of lesions per year",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Time to last MRI scan = Time from randomization to last MRI scan considered in derivation of CUAL.",
      "id": "T_MRI_CUAL_09_F",
      "shell": "DS07",
      "title": "Time to last MRI scan",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Time to last MRI scan = Time from randomization to last MRI scan considered in derivation of CUAL.|Cumulative percentage of subjects with time >= x Weeks is presented.",
      "id": "F_MRI_CUAL_10_F",
      "shell": "CDF01",
      "title": "Time to last MRI scan",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_MRI_CUAL_11_F",
      "shell": "LMRI04",
      "title": "Listing of cumulative number of unique active lesion (CUAL) data",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=12-week CDA, CL=Confidence Limit.|P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last EDSS assessment without EDSS increase.",
      "id": "T_EDSS12W_01_F",
      "shell": "TTE02",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS: Time to event analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 12-week CDA; cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS12W_02_F",
      "shell": "TTE01",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS: Kaplan-Meier estimates",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 12-week CDA.\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS12W_03_F",
      "shell": "FTTE01",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS: Kaplan-Meier curve",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=12-week CDA (per protocol), CL=Confidence Limit.|12-week CDA derived based on EDSS asessments up to per protocol exclusion date. |P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last considered EDSS assessment without EDSS increase.",
      "id": "T_EDSS12W_04_P",
      "shell": "TTE02",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS (Per protocol): Time to event analysis",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 12-week CDA (Per Protocol); cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS12W_05_P",
      "shell": "TTE01",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol): Kaplan-Meier estimates",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 12-week CDA (Per Protocol).\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS12W_06_P",
      "shell": "FTTE01",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol): Kaplan-Meier curve",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=12-week on-treatment CDA, CL=Confidence Limit.|P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last EDSS assessment up to EOT + 7 days without EDSS|increase.|Onset of the event is up to EOT + 7 days, confirmation can be thereafter.",
      "id": "T_EDSS12W_07_F",
      "shell": "TTE02",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) on treatment (up to EOT + 7 days): Time to event analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 12-week CDA on-treatment; cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS12W_08_F",
      "shell": "TTE01",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) on treatment (up to EOT + 7 days): Kaplan-Meier estimates",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 12-week CDA on-treatment.\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS12W_09_F",
      "shell": "FTTE01",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) on treatment (up to EOT + 7 days): Kaplan-Meier curve",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=12-week CDA (worst case onset), CL=Confidence Limit.|P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last EDSS assessment without EDSS increase.   |Subject with non-confirmed EDSS increase at their last EDSS assessment are included as events.",
      "id": "T_EDSS12W_10_F",
      "shell": "TTE02",
      "title": "Time to first potential 12-week confirmed disability accumulation (CDA) up to EOS - Time to event analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 12-week CDA (worst case onset); cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. |Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS12W_11_F",
      "shell": "TTE01",
      "title": "Time to first potential 12-week confirmed disability accumulation (CDA) up to EOS - Kaplan-Meier estimates",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n|Event = 12-week CDA (worst case onset).\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS12W_12_F",
      "shell": "FTTE01",
      "title": "Time to first potential 12-week confirmed disability accumulation (CDA) up to EOS - Kaplan-Meier curve",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=12-week CDA (per protocol), CL=Confidence Limit.|12-week CDA derived based on EDSS asessments up to per protocol exclusion date. |P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subject with non-confirmed EDSS increase at their last considered EDSS assessment are included as|events.",
      "id": "T_EDSS12W_13_P",
      "shell": "TTE02",
      "title": "Time to first potential 12-week confirmed disability accumulation (CDA) up to EOS (Per protocol) - Time to event analysis",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 12-week CDA (Per Protocol); cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|12-week CDA derived based on EDSS asessments up to per protocol exclusion date. Subjects at risk,|censored, or with event immediately prior to (i.e. not including) the time point are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS12W_14_P",
      "shell": "TTE01",
      "title": "Time to first potential 12-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol) - Kaplan-Meier estimates",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 12-week CDA (Per Protocol). 12-week CDA derived based on EDSS asessments up to per protocol exclusion date. \n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS12W_15_P",
      "shell": "FTTE01",
      "title": "Time to first potential 12-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol) - Kaplan-Meier curve",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "p*=Interaction p-value, N=Number of subjects, Events = Number of subjects with event.  |Hazard ratio obtained from Cox regression with Wald confidence limits.",
      "id": "T_EDSS12W_16_F",
      "shell": "TTE03",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS - Subgroup analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "p*=Interaction p-value, n(pon)=No. of subjects in ponesimod group, e(pon)=No. of subjects with event in ponesimod group,|n(ter)=No. of subjects in teriflunomide group, e(ter)=No. of subjects with event in teriflunomide group.|The vertical solid line references the overall treatment effect from an unstratified cox regression analysis. |Box size is proportional to the number of subjects.|Hazard ratio obtained from Cox regression with Wald confidence limits.",
      "id": "F_EDSS12W_17_F",
      "shell": "FORTTE01",
      "title": "Time to first 12-week confirmed disability accumulation (CDA) up to EOS - Forest plot of subgroups",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_EDSS12W_18_F",
      "shell": "TTEL01",
      "title": "Listing of time to first 12-week and 24-week confirmed disability accumulation (CDA)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=24-week CDA, CL=Confidence Limit.|P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last EDSS assessment without an EDSS increase.",
      "id": "T_EDSS24W_01_F",
      "shell": "TTE02",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS: Time to event analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 24-week CDA; cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS24W_02_F",
      "shell": "TTE01",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS: Kaplan-Meier estimates",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 24-week CDA.\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS24W_03_F",
      "shell": "FTTE01",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS: Kaplan-Meier curve",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=24-week CDA (per protocol), CL=Confidence Limit.|24-week CDA derived based on EDSS asessments up to per protocol exclusion date. |P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last considered EDSS assessment without an EDSS|increase.",
      "id": "T_EDSS24W_04_P",
      "shell": "TTE02",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS (Per protocol): Time to event analysis",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 24-week CDA (Per Protocol); cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS24W_05_P",
      "shell": "TTE01",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol): Kaplan-Meier estimates",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 24-week CDA (Per Protocol).\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS24W_06_P",
      "shell": "FTTE01",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol): Kaplan-Meier curve",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=24-week on-treatment CDA, CL=Confidence Limit.|P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last EDSS assessment up to EOT + 7 days without EDSS|increase.",
      "id": "T_EDSS24W_07_F",
      "shell": "TTE02",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) on treatment (up to EOT + 7 days): Time to event analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 24-week CDA on-treatment; cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS24W_08_F",
      "shell": "TTE01",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) on treatment (up to EOT + 7 days): Kaplan-Meier estimates",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 24-week CDA on-treatment.\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS24W_09_F",
      "shell": "FTTE01",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) on treatment (up to EOT + 7 days): Kaplan-Meier curve",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=24-week CDA (worst case onset), CL=Confidence Limit.|P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last EDSS assessment without EDSS increase.|Subject with non-confirmed EDSS increase at their last EDSS assessment are included as events.",
      "id": "T_EDSS24W_10_F",
      "shell": "TTE02",
      "title": "Time to first potential 24-week confirmed disability accumulation (CDA) up to EOS - Time to event analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 24-week CDA (worst case onset); cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n|\n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS24W_11_F",
      "shell": "TTE01",
      "title": "Time to first potential 24-week confirmed disability accumulation (CDA) up to EOS -Kaplan-Meier estimates",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 24-week CDA (worst case onset).\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS24W_12_F",
      "shell": "FTTE01",
      "title": "Time to first potential 24-week confirmed disability accumulation (CDA) up to EOS - Kaplan-Meier curve",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=24-week CDA (per protocol), CL=Confidence Limit.|24-week CDA derived based on EDSS asessments up to per protocol exclusion date. |P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their last considered EDSS assessment.|Subject with non-confirmed EDSS increase at their last considered EDSS assessment are included as|events.",
      "id": "T_EDSS24W_13_P",
      "shell": "TTE02",
      "title": "Time to first potential 24-week confirmed disability accumulation (CDA) up to EOS (Per protocol) - Time to event analysis",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Event = 24-week CDA (Per Protocol); cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|24-week CDA derived based on EDSS asessments up to per protocol exclusion date. Subjects at risk,|censored, or with event immediately prior to (i.e. not including) the time point are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_EDSS24W_14_P",
      "shell": "TTE01",
      "title": "Time to first potential 24-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol) - Kaplan-Meier estimates",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = 24-week CDA (Per Protocol). 12-week CDA derived based on EDSS asessments up to per protocol exclusion date. \n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits. Analysis is stratified by|EDSS (<=3.5 vs >3.5) and Disease modifying therapy in last 2 years prior randomization (Yes vs No).",
      "id": "F_EDSS24W_15_P",
      "shell": "FTTE01",
      "title": "Time to first potential 24-week confirmed disability accumulation (CDA) up to EOS (Per-Protocol) - Kaplan-Meier curve",
      "population": "Per protocol Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "p*=Interaction p-value, N=Number of subjects, Events = Number of subjects with event.  |Hazard ratio obtained from Cox regression with Wald confidence limits.",
      "id": "T_EDSS24W_16_F",
      "shell": "TT03",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS  - Subgroup analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "p*=Interaction p-value, n(pon)=No. of subjects in ponesimod group, e(pon)=No. of subjects with event in ponesimod group,|n(ter)=No. of subjects in teriflunomide group, e(ter)=No. of subjects with event in teriflunomide group.|The vertical solid line references the overall treatment effect from an unstratified cox regression analysis. |Box size is proportional to the number of subjects.|Hazard ratio obtained from Cox regression with Wald confidence limits.",
      "id": "F_EDSS24W_17_F",
      "shell": "FORTTE01",
      "title": "Time to first 24-week confirmed disability accumulation (CDA) up to EOS - Forest plot of subgroups",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Premature end of treatment visit results are included in the respective scheduled visit if conducted|in the respective visit window.",
      "id": "T_MRI_T1_01_F",
      "shell": "Count01",
      "title": "Number of Gadolinium-enhancing (Gd+) T1 lesions, by visit - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "In case of missing assessment at a visit the last previously available result is considered.",
      "id": "T_MRI_T1_02_F",
      "shell": "Count01",
      "title": "Number of Gadolinium-enhancing (Gd+) T1 lesions (last observation carried forward), by visit - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Cumulative number of new T1 lesions up to Week 108 includes new lesions from Week 60, Week 108, and|premature end of treatment scan if available. Unscheduled scans are included if is the last|available assessment.",
      "id": "T_MRI_T1_03_F",
      "shell": "Count02",
      "title": "Number of new cumulative Gadolinium-enhancing (Gd+) T1 lesions from baseline to Week 60 and to Week 108 - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Cumulative number of new T1 lesions up to Week 108 includes new lesions from Week 60, Week 108, and|premature end of treatment scan if available. Unscheduled scans are included if it is the last|available assessment. |Subjects with missing Week 60 or Week 108 MRI scan have cumulative unique active lesions up to that|time point displayed. |Only results up to EOT + 7 days are included.",
      "id": "T_MRI_T1_04_F",
      "shell": "Count02",
      "title": "Number of new cumulative Gadolinium-enhancing (Gd+) T1 lesions from baseline to Week 60 and to Week 108 up to EOT + 7 days - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Gd+ T1 lesions per scan, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial|model is applied with Wald confidence intervals and p-value.\n\n |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .",
      "id": "T_MRI_T1_05_F",
      "shell": "NegBin01",
      "title": "Number of Gadolinium-enhancing (Gd+) T1 lesions at Week 60 (Last observation carried forward) - Statistical Analysis (Negative binomial regression)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Gd+ T1 lesions per scan, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial|model is applied with Wald confidence intervals and p-value.\n\n |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .",
      "id": "T_MRI_T1_06_F",
      "shell": "NegBin01",
      "title": "Number of Gadolinium-enhancing (Gd+) T1 lesions at Week 60  - Statistical Analysis (Negative binomial regression)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Gd+ T1 lesions per scan, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial|model is applied with Wald confidence intervals and p-value.\n\n |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) . |Estimates per scan are displayed.",
      "id": "T_MRI_T1_07_F",
      "shell": "NegBin01",
      "title": "Number of Gadolinium-enhancing (Gd+) T1 lesions at Week 108 (Last observation carried forward) - Statistical Analysis (Negative binomial regression)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Gd+ T1 lesions per scan, Rate Ratio: Ponesimod vs. Teriflunomide.\nNegative binomial|model is applied with Wald confidence intervals and p-value.\n\n |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) . |Estimates per scan are displayed.",
      "id": "T_MRI_T1_08_F",
      "shell": "NegBin01",
      "title": "Number of Gadolinium-enhancing (Gd+) T1 lesions at Week 108 - Statistical Analysis (Negative binomial regression)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "*as compared to last scheduled visit, where premature EOT, Week 60 and Week 108 are considered scheduled visits.|Persisting = Number of persisting lesions as compared to last scheduled visit or number of lesions for baseline visit.\n|Day = Study day from randomization. Days off = Days off treatment (Treatment end date - MRI date + 1).",
      "id": "L_MRI_T1_09_F",
      "shell": "LMRI02",
      "title": "Listing of Gadolinium-enhancing (Gd+) T1 lesions",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Includes new or enlarging T2 lesions collected from baseline up to the respective time point,|including results from MRI scans at premature end of treatment or unscheduled visits. |Subjects with missing Week 60 or Week 108 MRI scan have cumulative T2 lesions up to that time point|displayed.",
      "id": "T_MRI_T2_01_F",
      "shell": "Count02",
      "title": "Cumulative number of new or enlarging T2 lesions from baseline to Week 60 and Week 108  - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Includes new or enlarging T2 lesions collected from baseline up to the respective time point,|including results from MRI scans at premature end of treatment or unscheduled visits. |Subjects with missing Week 60 or Week 108 MRI scan have cumulative T2 lesions up to that time point|displayed. |Only results up to EOT + 7 days are included.",
      "id": "T_MRI_T2_02_F",
      "shell": "Count02",
      "title": "Cumulative number of new or enlarging T2 lesions from baseline to Week 60 and Week 108  up to EOT + 7 days - descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Cumulative new or enlarging T2 lesions per year, Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years). |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .",
      "id": "T_MRI_T2_03_F",
      "shell": "NegBin01",
      "title": "Cumulative number of new or enlarging T2 lesions from baseline to Week 60  - Statistical Analysis (Negative binomial regression) of lesions per year",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Mean estimate = Cumulative new or enlarging T2 lesions per year, Rate Ratio: Ponesimod vs.|Teriflunomide.\nNegative binomial model is applied with Wald confidence intervals and p-value.\n |Offset: Log Time (years). |Covariates: EDSS (<3.5,>=3.5) , DMT within last 2Â years prior to randomization (Y/N), and Gd+ T1|lesions at baseline (absent or present) .",
      "id": "T_MRI_T2_04_F",
      "shell": "NegBin01",
      "title": "Cumulative number of new or enlarging T2 lesions from baseline to Week 108  - Statistical Analysis (Negative binomial regression) of lesions per year",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Day = Study day from randomization. Days off = Days off treatment (Treatment end date - MRI date + 1).\nBL = baseline,|Cumulative from BL: Includes only scheduled visits unless respective visit is an unscheduled visit. \n",
      "id": "L_MRI_T2_05_F",
      "shell": "LMRI03",
      "title": "Listing of T2 lesions",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Premature end of treatment visit results are included in the respective scheduled visit if conducted|in the respective visit window. |Percent change from baseline is provided by the central reader and not derived.",
      "id": "T_MRI_BV_01_F",
      "shell": "MRIBV01",
      "title": "Brain volume: Percent change from baseline by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "In case of missing assessment at a visit the last previously available result is considered. |Percent change from baseline is provided by the central reader and not derived.",
      "id": "T_MRI_BV_02_F",
      "shell": "MRIBV01",
      "title": "Brain volume: Percent change from baseline (LOCF), by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator|Degrees of Freedom, SE=Standard Error\n\n|Statistical model is a mixed effect model with treatment, time (days) as continous variable and|interaction between treatment and time as fixed effects, and subject as a random effect. EDSS score at|baseline (<=3.5 vs.>3.5),  prior use of disease modifying therapy (Yes / No),   Gd+ T1 lesions at baseline (absent or present), and baseline brain volume are included as covariates. Within subjects a spatial power covariance structure in time is assumed. |Includes all data available (scheduled, premature EOT visit, and unscheduled visits)",
      "id": "T_MRI_BV_03_F",
      "shell": "LAYBETW005a",
      "title": "Brain volume: Percent change from baseline up to Week 108 - Statistical analysis (Mixed model - linear time effect)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator|Degrees of Freedom, SE=Standard Error\n\n|Statistical model is a mixed effects repeated measurments model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit as fixed effects, and subject|as a random effect. EDSS score at baseline (continous score),  prior use of disease modifying therapy (Yes / No), and baseline T2 volume are included as covariates.",
      "id": "T_MRI_BV_04_F",
      "shell": "LAYBETW005a",
      "title": "Brain volume: Percent change from baseline up to Week 108  -  (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Day = Study day from randomization. Days off = Days off treatment (Treatment end date - MRI date + 1).\nPercentage brain|volume change since V2 (baseline) as provided by central reader is presented (not re-derived).",
      "id": "L_MRI_BV_05_F",
      "shell": "LMRI04",
      "title": "Listing of brain volume",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_MRI_VL_01_F",
      "shell": "GE01",
      "title": "Volume of T2 lesions by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_MRI_VL_02_F",
      "shell": "GE02",
      "title": "Volume of T2 lesions: Change from baseline by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "In case of missing assessment at a visit the last previously available result is considered.",
      "id": "T_MRI_VL_03_F",
      "shell": "GE01",
      "title": "Volume of T2 lesions by visit (LOCF) - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "In case of missing assessment at a visit the last previously available result is considered.",
      "id": "T_MRI_VL_04_F",
      "shell": "GE02",
      "title": "Volume of T2 lesions: Change from baseline by visit (LOCF) - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator|Degrees of Freedom, SE=Standard Error\n\n|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit as fixed effects, and subject|as a random effect. EDSS score at baseline (continous score),  prior use of disease modifying therapy (Yes / No), and baseline T2 volume are included as covariates.",
      "id": "T_MRI_VL_05_F",
      "shell": "LAYBETW005a",
      "title": "Volume of T2 lesions: Statistical analysis of change from baseline up to Week 108 (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_MRI_VL_06_F",
      "shell": "GE01",
      "title": "Volume of T1 hypointense lesions by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "In case of missing assessment at a visit the last previously available result is considered.",
      "id": "T_MRI_VL_07_F",
      "shell": "GE01",
      "title": "Volume of T1 hypointense lesions by visit (LOCF)- Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_MRI_VL_08_F",
      "shell": "GE02",
      "title": "Volume of T1 hypointense lesions: Change from baseline by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "In case of missing assessment at a visit the last previously available result is considered.",
      "id": "T_MRI_VL_09_F",
      "shell": "GE02",
      "title": "Volume of T1 hypointense lesions: Change from baseline by visit (LOCF)- Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator|Degrees of Freedom, SE=Standard Error\n\n|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit as fixed effects, and subject|as a random effect. EDSS score at baseline (continous score),  prior use of disease modifying therapy (Yes / No), and baseline T1 hypointense volume are included as covariates.",
      "id": "T_MRI_VL_10_F",
      "shell": "LAYBETW005a",
      "title": "Volume of T1 hypointense lesions: Statistical analysis of change from baseline up to Week 108 (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Day = Study day from randomization. Days off = Days off treatment (Treatment end date - MRI date + 1).",
      "id": "L_MRI_VL_11_F",
      "shell": "LMRI05",
      "title": "Listing of MRI lesion volume data",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Premature end of treatment visit results are included in the respective scheduled visit if conducted|in the respective visit window.",
      "id": "T_MRI_AL_01_F",
      "shell": "NOLES01",
      "title": "Absence of Gd+ T1 lesion by visit - Descriptive Statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "All MRI scans up to the respective time point are included.",
      "id": "T_MRI_AL_02_F",
      "shell": "NOLES01",
      "title": "Absence of Gd+ T1 lesion from baseline up to each vistit (cumulative)- Descriptive Statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "OR=Odds Ratio, DF = Degrees of Freedom, SE = Standard Error. |Logistic regression model with treatment as factor, adjusted for covariates EDSS (<=3.5 vs >3.5),|Disease modifying therapy in last 2 years prior randomization (Yes vs No), Presence of Gd+ T1 lesions|at baseline is applied. Separate models per time point are fitted. |Confidence limits (CL) for OR are calculated using the Wald method. Subjects with missing|information are considered to have lesions present.",
      "id": "T_MRI_AL_03_F",
      "shell": "LOGREG01",
      "title": "Absence of Gd+ T1 lesion by visit - Statistical analysis (logistic regression)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "All MRI scans up to the respective time point are included.",
      "id": "T_MRI_AL_04_F",
      "shell": "NOLES01",
      "title": "Absence of new or enlarging T2 lesions from baseline up to each visit - Descriptive Statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "All MRI scans up to the respective time point are included. OR=Odds Ratio, DF = Degrees of Freedom,|SE = Standard Error. |Logistic regression model with treatment as factor, adjusted for covariates EDSS (<=3.5 vs >3.5),|Disease modifying therapy in last 2 years prior randomization (Yes vs No), Presence of Gd+ T1 lesions|at baseline is applied. Separate models per time point are fitted. |Confidence limits (CL) for OR are calculated using the Wald method. Subjects with missing|information are considered to have lesions present.",
      "id": "T_MRI_AL_05_F",
      "shell": "LOGREG01",
      "title": "Absence of new or enlarging T2 lesions from baseline - Statistical analysis (logistic regression) by time point",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "* Based on subjects with T1-hypointense lesions assessed at the respective time point.",
      "id": "T_MRI_BH_01_F",
      "shell": "MRIBH01",
      "title": "Proportion of Gd+ T1 lesions at baseline evolving to persistent black holes by visit",
      "population": "Full Analysis Set - Subset with Gd+ T1 lesions present at baseline",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "* Based on subjects with T1-hypointense lesions assessed at the respective time point.",
      "id": "T_MRI_BH_02_F",
      "shell": "MRIBH01",
      "title": "Proportion of Gd+ T1 lesions at baseline evolving to persistent black holes by visit (LOCF)",
      "population": "Full Analysis Set - Subset with Gd+ T1 lesions present at baseline",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Day = Study day from randomization. Days off = Days off treatment (Treatment end date - MRI date + 1).",
      "id": "L_MRI_BH_03_F",
      "shell": "LMRI06",
      "title": "Listing of Gadolinium-enhancing (Gd+) T1 lesions evolving to persistent black holes",
      "population": "Full Analysis set",
      "Pgmer": "",
      "domain": "ADMRI",
      "description": null
    },
    {
      "Footnote": "Hazard ratio=Ponesimod vs. Teriflunomide, Event=confirmed relapse, CL=Confidence Limit.|P-values are two-sided and based on the (stratified) log-rank test. Hazard ratio estimates obtained|from (stratified) cox regression with Wald confidence limits.|Subjects without event are censored at their end of study date.|\n",
      "id": "T_REL_1R_01_F",
      "shell": "TTE02",
      "title": "Time to first confirmed relapse up to EOS: Time to event analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Event = Confirme relapse; cum = cumulative, KM = Kaplan-Meier, CL = Confidence Limit.\n \n|Subjects at risk, censored, or with event immediately prior to (i.e. not including) the time point|are displayed. |Greenwood's formula is used for CL of KM estimates; CL are point-wise intervals. \n|Confidence limits for percentiles obtained using the method of Brookmeyer.",
      "id": "T_REL_1R_02_F",
      "shell": "TTE01",
      "title": "Time to first confirmed relapse (weeks) up to EOS: Kaplan-Meier estimates",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Bars on graph display pointwise 95% confidence intervals of the estimate. \n\n|Event = Confirmed relapse.\n|Unstratified Kaplan-Meier estimates are presented. \n\n |P-value is two-sided and based on the stratified log-rank test. |Hazard Ratio estimate obtained from stratified cox regression with Wald confidence limits.",
      "id": "F_REL_1R_03_F",
      "shell": "FTTE01",
      "title": "Time to first confirmed relapse (weeks) up to EOS: Kaplan-Meier curve",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_REL_1R_04_F",
      "shell": "TTEL01",
      "title": "Listing of time to first confirmed relapse up to EOS data",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_REL_AR_01_F",
      "shell": "NOLES01",
      "title": "Absence of confirmed relapses from baseline by time point",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "Statistical model is a logistic regression model with treatment as factor, adjusted for covariates:|EDSS (<=3.5 vs >3.5), Disease modifying therapy in last 2 years prior randomization (Yes vs No),|Number of relapses in the year prior to study entry (? 1 vs ? 2). Separate models per time point are fitted. \n|Confidence limits (CL) for OR are calculated using the Wald method. Subjects with missing|information (End of Study prior to respective time point) are considered to have not achieved absence of|confirmed relapses.\n\n|OR=Odds Ratio, DF = Degrees of Freedom, SE = Standard Error. |Logistic regression model with treatment as factor, adjusted for covariates EDSS (<=3.5 vs >3.5),|Disease modifying therapy in last 2 years prior randomization (Yes vs No), Number of relapses in the|year prior to study entry (? 1 vs ? 2) is applied. Separate models per time point are fitted. |Confidence limits (CL) for OR are calculated using the Wald method. Subjects with missing|information are considered to have not achieved NEDA.\n\n",
      "id": "T_REL_AR_02_F",
      "shell": "LOGREG01",
      "title": "Absence of confirmed relapses from baseline by time point  - Statistical Analysis (Logistic regression)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADREL",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_EDSS_01_F",
      "shell": "GE01",
      "title": "EDSS score by visit up to Week 108",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_EDSS_02_F",
      "shell": "GE02",
      "title": "EDSS score: Change from baseline by visit- Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_EDSS_03_F",
      "shell": "GE02",
      "title": "EDSS score: Change from baseline by visit up to EOT + 7 days - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator|Degrees of Freedom, SE=Standard Error\n\n|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit as fixed effects, and subject|as a random effect. EDSS score at baseline (continous score),  prior use of disease modifying therapy (Yes / No) are included as covariates.",
      "id": "T_EDSS_04_F",
      "shell": "LAYBETW005a",
      "title": "EDSS score: Statistical analysis of change from baseline up to Week 108 (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "Least square means and associated 95% CLs from a mixed effects repeated measurements model (MMRM) including fixed|effects for treatment, visit and interaction between treatment and visit, and subject as a random effect. |EDSS score at baseline (continous score),  prior use of disease modifying therapy (Yes / No) are included as covariates.|",
      "id": "F_EDSS_05_F",
      "shell": "FIGLINE004",
      "title": "EDSS score: Statistical analysis of change from baseline up to Week 108 (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_EDSS_06_F",
      "shell": "EDSSL01",
      "title": "Listing of EDSS / functional system (FS) scores",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADEDSS",
      "description": null
    },
    {
      "Footnote": "NEDA status is evaluated from baseline to the specified time point. |NEDA-4 is defined as absence of confirmed relapse, Gd+ T1 lesions, new or enlarging T2 lesions,|12-week CDA, and annual brain volume decrease ? 0.4% from baseline up to the specified time point.",
      "id": "T_NEDA_01_F",
      "shell": "NEDA01",
      "title": "No evidence of disease (NEDA-4) status",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADNEDA",
      "description": null
    },
    {
      "Footnote": "NEDA-3 status is evaluated from baseline to the specified time point. |NEDA-3 is defined as absence of confirmed relapse, Gd+ T1 lesions, new or enlarging T2 lesions, and|12-week CDA from baseline up to the specified time point.",
      "id": "T_NEDA_02_F",
      "shell": "NEDA01",
      "title": "No evidence of disease (NEDA-3) status",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADNEDA",
      "description": null
    },
    {
      "Footnote": "OR=Odds Ratio, DF = Degrees of Freedom, SE = Standard Error. |Logistic regression model with treatment as factor, adjusted for covariates EDSS (<=3.5 vs >3.5),|Disease modifying therapy in last 2 years prior randomization (Yes vs No), Number of relapses in the|year prior to study entry (? 1 vs ? 2), Presence of Gd+ T1 lesions at baseline is applied. Separate models per time point are fitted. |Confidence limits (CL) for OR are calculated using the Wald method. Subjects with missing|information are considered to have not achieved NEDA.\n\n",
      "id": "T_NEDA_03_F",
      "shell": "LOGREG01",
      "title": "No evidence of disease (NEDA-4) status - Statistical Analysis by time point",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADNEDA",
      "description": null
    },
    {
      "Footnote": "OR=Odds Ratio, DF = Degrees of Freedom, SE = Standard Error. |Logistic regression model with treatment as factor, adjusted for covariates EDSS (<=3.5 vs >3.5),|Disease modifying therapy in last 2 years prior randomization (Yes vs No), Number of relapses in the|year prior to study entry (? 1 vs ? 2), Presence of Gd+ T1 lesions at baseline is applied. Separate models per time point are fitted. |Confidence limits (CL) for OR are calculated using the Wald method. Subjects with missing|information are considered to have not achieved NEDA-3.\n\n",
      "id": "T_NEDA_04_F",
      "shell": "LOGREG01",
      "title": "No evidence of disease (NEDA-3) status - Statistical Analysis by time point",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADNEDA",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_NEDA_05_F",
      "shell": "NEDAL01",
      "title": "Listing of no evidence of disease (NEDA-3 and NEDA-4) status",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADNEDA",
      "description": null
    },
    {
      "Footnote": "Length of stay = Date of discharge â€“ Date of admission + 1.",
      "id": "T_HO_01_F",
      "shell": "HO01",
      "title": "Duration of health care resource utilization from baseline up to EOS",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADHO",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_HO_02_F",
      "shell": "HO02",
      "title": "Frequency of health care resource utilizations from baseline up to EOS",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADHO",
      "description": null
    },
    {
      "Footnote": "ER=Emergency Room, ICU=intensive care unit.|Emergency room visit is not considered a hospitalization.",
      "id": "L_HO_03_F",
      "shell": "HOL01",
      "title": "Listing of health care resource utilization",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADHO",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_HO_04_F",
      "shell": "HOL02",
      "title": "Listing of discharge from cardiac monitoring",
      "population": "Full Analysis Set",
      "Pgmer": "CROS NT",
      "domain": "ADHO",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, CL=Confidence Limit,|DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit, interaction between baseline|and visit as fixed effects, and subject as a random effect. Baseline FSIQ score and EDSS score (EDSS?3.5, EDSS>3.5) at baseline and prior use of disease modifying therapy (Yes / No) are included as covariates. |Subjects with baseline and at least one post baseline assessment are included in the analysis.|Treatment effect is derived based on the difference in least squares means with corresponding 95%|CIs. P value is derived from the t- distribution.|A positive change indicates \nworse outcome.",
      "id": "T_FSIQ_SS_01_F",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline to week 108 (MMRM - main analysis)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, CL=Confidence Limit,|DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit, interaction between baseline|and visit as fixed effects, and subject as a random effect. Baseline FSIQ score and EDSS score (EDSS?3.5, EDSS>3.5) at baseline and prior use of disease modifying therapy (Yes / No) are included as covariates. |Subjects with baseline and at least one post baseline assessments are included in the analysis.|Treatment effect per visit is derived based on the difference in least squares means with|corresponding 95% CIs. P value is derived from the corresponding t- distributions.|A positive change indicates \nworse outcome.",
      "id": "T_FSIQ_SS_02_F",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance matrix, treatment,|visit and interaction between treatment and visit, interaction between baseline and visit  as fixed effects, and subject|as a random effect. Baseline FSIQ score and EDSS score (EDSS?3.5, EDSS>3.5) at baseline and prior use of disease modifying therapy (Yes / No) are included as covariates. |LS means and 95% CI are displayed|A positive change indicates \nworse outcome.",
      "id": "F_FSIQ_SS_03_F",
      "shell": "FIGLINE004",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis",
      "id": "T_FSIQ_SS_04_F",
      "shell": "Will come later",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline to week 108 - Delta worsening adjustment sensitivity analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, CL=Confidence Limit,|DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|ANCOVA model with Baseline FSIQ score, EDSS score (EDSS?3.5, EDSS>3.5) at baseline and prior use of|disease modifying therapy (Yes / No) as covariates.|Subjects with baseline and at least one post baseline assessment are included in the analysis.|A positive change indicates \nworse outcome.",
      "id": "T_FSIQ_SS_05_F",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline to week 108 (LOCF) - ANCOVA",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, CL=Confidence Limit,|DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit, interaction between baseline|and visit  as fixed effects, and subject as a random effect. Baseline FSIQ score and EDSS score (EDSS?3.5, EDSS>3.5) at baseline and prior use of disease modifying therapy (Yes / No) are included as covariates. |Subjects with baseline and at least one post baseline assessment are included in the analysis.|Treatment effect per visit is derived based on the difference in least squares means\nwith|corresponding 95% CIs. P value is derived from the corresponding t- distributions.|A positive change indicates \nworse outcome.",
      "id": "T_FSIQ_SS_06_F",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline to week 108 (MMRM) based on data collected up to EOT + 7 days",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, CL=Confidence Limit,|DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment and visit, interaction between baseline|and visit  as fixed effects, and subject as a random effect. Baseline FSIQ score and EDSS score (EDSS?3.5, EDSS>3.5) at baseline and prior use of disease modifying therapy (Yes / No) are included as covariates. |Subjects with baseline and at least one post baseline assessment are included in the analysis. Data|collected after per protocol exclusion date are excluded from the analysis.|Treatment effect per visit is derived based on the difference in least squares means with|corresponding 95% CIs. P value is derived from the corresponding t- distributions.|A positive change indicates \nworse outcome.",
      "id": "T_FSIQ_SS_07_P",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline to week 108 (MMRM) - per protocol analysis",
      "population": "Per Protocol Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis|Higher scores indicate worse outcome.",
      "id": "T_FSIQ_SS_08_F",
      "shell": "GE01",
      "title": "FSIQ-RMS weekly symptoms score: Descriptive statistics by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis|n=number of subjects with both baseline and post baseline assessments.|A positive change indicates \nworse outcome.",
      "id": "T_FSIQ_SS_09_F",
      "shell": "GE02",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline by visit - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis|n=number of subjects with both baseline and post baseline assessments.|A positive change indicates \nworse outcome.",
      "id": "T_FSIQ_SS_10_F",
      "shell": "GE02",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline by visit (LOCF) - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis|Descriptive statistics are displayed. Includes subjects with\n baseline and a post-baseline assessment per time point.  |A positive change indicates \nworse outcome.",
      "id": "F_FSIQ_SS_11_F",
      "shell": "FIGLINE004",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline by visit (mean and +/- standard error)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Descriptive statistics are displayed. Includes subjects with baseline and at least one post-baseline assessment.|A positive change indicates \nworse outcome.",
      "id": "F_FSIQ_SS_12_F",
      "shell": "FIGLINE004",
      "title": "FSIQ-RMS weekly symptoms score: Change from baseline by visit (mean and +/- standard error) (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_FSIQ_SS_13_F",
      "shell": "LAYCAT001",
      "title": "Subjects with available FSIQ-RMS weekly symptoms score by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "RMS: Relapsing Multiple Sclerosis",
      "id": "L_FSIQ_SS_14_F",
      "shell": "",
      "title": "Listing of Fatigue Symptoms and Impacts Questionnaire (FSIQ-RMS) weekly and daily symptom scores",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "RMS: Relapsing Multiple Sclerosis",
      "id": "L_FSIQ_SS_15_F",
      "shell": "",
      "title": "Listing of Fatigue Symproms and Impacts Questionnaire (FSIQ-RMS) symptom items",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Percentages are out of M=Subjects with available baseline FSIQ score.",
      "id": "T_FSIQ_SS_16_F",
      "shell": "LAYCAT001A",
      "title": "FSIQ-RMS symptoms patient improvement response by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Percentages are out of M=Subjects with available baseline FSIQ score.",
      "id": "T_FSIQ_SS_17_F",
      "shell": "LAYCAT001A",
      "title": "FSIQ-RMS symptoms clinical improvement response by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Subjects with available baseline FSIQ score are included in the analysis.",
      "id": "T_FSIQ_SS_18_F",
      "shell": "LOGREG01",
      "title": "FSIQ-RMS symptoms patient improvement response - statistical analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Subjects with available baseline FSIQ score are included in the analysis.",
      "id": "T_FSIQ_SS_19_F",
      "shell": "LOGREG01",
      "title": "FSIQ-RMS symptoms clinical improvement response - statistical analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Includes subjects with baseline and Week 108  assessments. |A positive change indicates \na worse outcome.",
      "id": "F_FSIQ_SS_20_F",
      "shell": "TCDF02",
      "title": "FSIQ-RMS symptoms weekly score: Cumulative distribution function of change from baseline to Week 108",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Includes subjects with baseline and Week 108  assessments. |A positive change indicates \na worse outcome.",
      "id": "F_FSIQ_SS_21_F",
      "shell": "CDF02",
      "title": "FSIQ-RMS symptoms weekly score: Cumulative distribution function of change from baseline to Week 108",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Includes subjects with baseline and Week 108  assessments. |A positive change indicates \na worse outcome.",
      "id": "F_FSIQ_SS_22_F",
      "shell": "CDF02",
      "title": "FSIQ-RMS symptoms weekly score: Cumulative distribution function of change from baseline to Week 108 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis|Higher scores indicate worse outcome.",
      "id": "T_FSIQ_IS_01_F",
      "shell": "GE01",
      "title": "FSIQ-RMS weekly impact scores per sub-domain: Descriptive statistics by visit\n",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Includes subjects with baseline and at least one post-baseline assessment.|A positive change indicates \na worse outcome.",
      "id": "T_FSIQ_IS_02_F",
      "shell": "GE02",
      "title": "FSIQ-RMS weekly impact scores per sub-domain: Changes from baseline by visit - Descriptive statistics\n",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |n=number of subjects with both baseline and post baseline assessments.|A positive change indicates \na worse outcome.",
      "id": "T_FSIQ_IS_03_F",
      "shell": "GE02",
      "title": "FSIQ-RMS weekly impact scores per sub-domain: Changes from baseline by visit (LOCF) - Descriptive statistics\n",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, SE = Standard error. |Includes subjects with baseline and at least one post-baseline assessments. |A positive change indicates \na worse outcome.",
      "id": "F_FSIQ_IS_04_F",
      "shell": "FIGLINE004",
      "title": "FSIQ-RMS weekly impact scores per sub-domain: Mean (+/- SE) change from baseline by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis,  CL=Confidence|Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured covariance|matrix, treatment, visit and interaction between treatment  and visit, interaction between baseline|score and visit  as  fixed effects, and subject as a random effect. \nBaseline score, EDSS at baseline (EDSS?3.5, EDSS>3.5)  and prior use of disease modifying therapy (Yes / No) are included as covariates. |A positive change indicates \na worse outcome.",
      "id": "T_FSIQ_IS_05_F",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly physical impacts score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis  |Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured  covariance matrix, treatment,|visit and interaction between treatment\nand visit, interaction between baseline score and visit  as  fixed effects, and|subject as a random effect. \nBaseline score, EDSS at baseline (EDSS?3.5, EDSS>3.5)  and prior use of disease modifying therapy (Yes / No) are included as covariates. |A positive change indicates \na worse outcome.",
      "id": "F_FSIQ_IS_06_F",
      "shell": "FIGLINE004",
      "title": "FSIQ-RMS weekly physical impacts score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, CL=Confidence Limit,|DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured|\ncovariance matrix, treatment, visit and interaction between treatment\n and visit, interaction between|baseline score and visit  as\n fixed effects, and subject as a random effect. \nBaseline score, EDSS at baseline (EDSS?3.5, EDSS>3.5)  and prior use of disease modifying therapy (Yes / No) are included as covariates. |A positive change indicates \na worse outcome.",
      "id": "T_FSIQ_IS_07_F",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly cognitive / emotional impacts score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis |Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured\n covariance matrix, treatment,|visit and interaction between treatment\n and visit, interaction between baseline  score and visit  as\n fixed effects,|and subject as a random effect. \nBaseline score, EDSS at baseline (EDSS?3.5, EDSS>3.5)  and prior use of disease modifying therapy (Yes / No) are included as covariates. |A positive change indicates \na worse outcome.",
      "id": "F_FSIQ_IS_08_F",
      "shell": "FIGLINE004",
      "title": "FSIQ-RMS weekly cognitive / emotional impacts score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, CL=Confidence Limit,|DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured|\ncovariance matrix, treatment, visit and interaction between treatment\n and visit, interaction between|baseline score and visit  as\n fixed effects, and subject as a random effect. \nBaseline score, EDSS at baseline (EDSS?3.5, EDSS>3.5)  and prior use of disease modifying therapy (Yes / No) are included as covariates. |A positive change indicates \na worse outcome.",
      "id": "T_FSIQ_IS_09_F",
      "shell": "LAYBETW005a",
      "title": "FSIQ-RMS weekly coping impacts score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis |Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured \ncovariance matrix, treatment,|visit and interaction between treatment\n and visit, interaction between baseline impact score and visit  as\n fixed|effects, and subject as a random effect. \nBaseline score, EDSS at baseline (EDSS?3.5, EDSS>3.5)  and prior use of disease modifying therapy (Yes / No) are included as covariates. |A positive change indicates \na worse outcome.",
      "id": "F_FSIQ_IS_10_F",
      "shell": "FIGLINE004",
      "title": "FSIQ-RMS weekly coping impacts score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, SC= Symptom Score, PIS= Physical Impact|Score,\nCEI= Cognitive / Emotional Impact Score, CI= Coping Impact Score\n|Positive change indicate worse symptoms or impact outcome.|SE = Standard error of mean\nLOCF: Last Observation Carried Forward",
      "id": "F_FSIQ_IS_11_F",
      "shell": "FIGMULT001",
      "title": "FSIQ-RMS: Fatigue and Impact Domain scores : Mean (+/- SE) changes from baseline to Week 108",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom and Impact Questionnaire-Relapsing Multiple Sclerosis, SC= Symptom Score, PIS= Physical Impact|Score,\nCEI= Cognitive / Emotional Impact Score, CI= Coping Impact Score\n|Positive change indicate worse symptoms or impact outcome.|SE = Standard error of mean\nLOCF: Last Observation Carried Forward",
      "id": "F_FSIQ_IS_12_F",
      "shell": "FIGMULT001",
      "title": "FSIQ-RMS: Fatigue and Impact Domain scores : Mean (+/- SE) changes from baseline to Week 108 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "FSIQ-RMS=Fatigue Symptom\n and Impact Questionnaire-Relapsing \nMultiple Sclerosis",
      "id": "L_FSIQ_IS_13_F",
      "shell": "",
      "title": "Listing of FSIQ-RMS impact sub-domain data",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADFSIQ",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator|Degrees of Freedom, SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured|\ncovariance matrix, treatment, visit and interaction between treatment\n and visit, interaction between|baseline MSFC Z-score and visit  as\n fixed effects, and subject as a random effect. \nBaseline MSFC Z-score and EDSS score (EDSS?3.5, EDSS>3.5) \nat baseline and prior use of disease modifying therapy (Yes / No) are included as covariates.|MSFC Z-Score is the mean of 3 components : Timed\n 25-Foot Walk (T25W), 9-Hole Peg Test (9-HPT),|Paced Auditory Serial Addition Test (PASAT-3). \nHigher MSFC Z-scores and positive changes from baseline|correspond to a better outcome.",
      "id": "T_MSFC_01_F",
      "shell": "LAYBETW005a",
      "title": "Multiple Sclerosis Functional Composite (MSFC) Z-scores: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured \ncovariance matrix, treatment,|visit and interaction between treatment\n and visit, interaction between baseline MSFCZ- score and visit  as\n fixed|effects, and subject as a random effect. \nBaseline MSFC Z-score and EDSS score (EDSS?3.5, EDSS>3.5) \nat baseline and prior use of disease modifying therapy (Yes / No) are included as covariates.|MSFC Z-Score is the mean of  3 components : Timed\n 25-Foot Walk (T25W), 9-Hole Peg Test (9-HPT), Paced Auditory Serial|Addition Test (PASAT-3). \nHigher MSFC Z-scores and positive changes from baseline correspond to a better outcome.",
      "id": "F_MSFC_02_F",
      "shell": "FIGLINE004",
      "title": "Multiple Sclerosis Functional Composite (MSFC) Z-score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "MSFC Z-Score is the mean of the 3 components : Timed\n 25-Foot Walk (T25W), 9-Hole Peg Test (9-HPT),|Paced Auditory Serial Addition Test (PASAT-3). \nHigher MSFC Z-scores correspond to a better outcome.|For T25W and 9-HPT higher scores represents worse outcome whereas, for PASAT-3, a higher score|represents better outcome.",
      "id": "T_MSFC_03_F",
      "shell": "GE01",
      "title": "Multiple Sclerosis Functional Composite (MSFC) Z-score and sub-components (T25W, 9-HPT, and PASAT-3) - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "MSFC Z-Score  is the mean  of 3 components : Timed\n 25-Foot Walk (T25W), 9-Hole Peg Test (9-HPT),|Paced Auditory Serial Addition Test (PASAT-3). \nHigher MSFC Z-scores and positive changes from|baseline correspond to a better outcome. |For T25W and 9-HPT higher scores represents worse outcome whereas, for PASAT-3, a higher score|represents better outcome.",
      "id": "T_MSFC_04_F",
      "shell": "GE02",
      "title": "Multiple Sclerosis Functional Composite (MSFC) Z-score and sub-components (T25W, 9-HPT, and PASAT-3)  - Change from baseline by visit - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "MSFC Z-Score is calculated as the mean of 3 components : Timed\n 25-Foot Walk (T25W), 9-Hole Peg Test|(9-HPT), Paced Auditory Serial Addition Test (PASAT-3). \nHigher MSFC Z-scores and positive changes|from baseline correspond to a better outcome. |For T25W and 9-HPT higher scores represents worse outcome whereas, for PASAT-3, a higher score|represents better outcome.|LOCF: Last Observation Carried Forward",
      "id": "T_MSFC_05_F",
      "shell": "GE02",
      "title": "Multiple Sclerosis Functional Composite (MSFC) Z-score and sub-components (T25W, 9-HPT, and PASAT-3)  - Change from baseline by visit (LOCF) - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "SE = Standard error of mean|MSFC Z-Score is calculated as the mean of the 3 components : Timed\n 25-Foot Walk (T25W), 9-Hole Peg Test (9-HPT), Paced|Auditory Serial Addition Test (PASAT-3). \nHigher MSFC Z-scores and positive changes from baseline correspond to a better|outcome.",
      "id": "F_MSFC_06_F",
      "shell": "FIGLINE004",
      "title": "Multiple Sclerosis Functional Composite (MSFC) Z-score: Mean (+/- SE) change from baseline by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "SE = Standard error of mean|For T25W a higher score or change represents worse outcome.",
      "id": "F_MSFC_07_F",
      "shell": "FIGLINE004",
      "title": "Timed 25-Foot Walk (T25W) score: Mean (+/- SE) change from baseline by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "SE = Standard error of mean|For 9-HPT, a higher score or change represents worse outcome.",
      "id": "F_MSFC_08_F",
      "shell": "FIGLINE004",
      "title": "9-Hole Peg Test (9-HPT) score: Mean (+/- SE) change from baseline by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "SE = Standard error of mean|For PASAT-3, a lower score or change represents worse outcome.",
      "id": "F_MSFC_09_F",
      "shell": "FIGLINE004",
      "title": "Paced Auditory Serial Addition Test (PASAT-3): Mean (+/- SE) change from baseline by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADMSFC",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator|Degrees of Freedom, SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured|\ncovariance matrix, treatment, visit and interaction between treatment\n and visit, interaction between|baseline score and visit  as\n fixed effects, and subject as a random effect. \nBaseline score and EDSS score (EDSS?3.5, EDSS>3.5) \nat baseline and prior use of disease modifying therapy (Yes / No) are included as covariates.|Higher SDMT scores or changes represent better results.",
      "id": "T_SDMT_01_F",
      "shell": "LAYBETW005a",
      "title": "Symbol Digit Modalities Test (SDMT) score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSDMT",
      "description": null
    },
    {
      "Footnote": "CL=Confidence Limit, DDF=Denominator Degrees of Freedom, LS Mean=Least Square Mean, NDF=Numerator Degrees of Freedom,|SE=Standard Error|Statistical model is a mixed effects repeated measurements model (MMRM) with unstructured \ncovariance matrix, treatment,|visit and interaction between treatment\n and visit, interaction between baseline  score and visit  as\n fixed effects,|and subject as a random effect. \nBaselinescore and EDSS score (EDSS?3.5, EDSS>3.5) \nat baseline and prior use of disease modifying therapy (Yes / No) are included as covariates.|Higher SDMT scores or changes represent better results.",
      "id": "F_SDMT_02_F",
      "shell": "FIGLINE004",
      "title": "Symbol Digit Modalities Test (SDMT) score: Change from baseline to Week 108 and by visit (MMRM)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSDMT",
      "description": null
    },
    {
      "Footnote": "Higher SDMT scores represent better results.",
      "id": "T_SDMT_03_F",
      "shell": "GE01",
      "title": "Symbol Digit Modalities Test (SDMT) score - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSDMT",
      "description": null
    },
    {
      "Footnote": "For SDMT, a lower row score represents deterioration. \nA positive change from baseline in SDMT|indicates improvement.|Higher SDMT scores or changes represent better results.",
      "id": "T_SDMT_04_F",
      "shell": "GE02",
      "title": "Symbol Digit Modalities Test (SDMT) score : Change from baseline by visit - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSDMT",
      "description": null
    },
    {
      "Footnote": "Higher SDMT scores or changes represent better results. |LOCF: Last Observation Carried Forward",
      "id": "T_SDMT_05_F",
      "shell": "GE02",
      "title": "Symbol Digit Modalities Test (SDMT) score : Change from baseline by visit (LOCF) - descriptive analysis",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSDMT",
      "description": null
    },
    {
      "Footnote": "Higher SDMT scores or changes represent better results. |SE = Standard error of mean",
      "id": "F_SDMT_06_F",
      "shell": "FIGLINE004",
      "title": "Symbol Digit Modalities Test (SDMT) score : Mean (+/- SE) change from baseline by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSDMT",
      "description": null
    },
    {
      "Footnote": "Higher SDMT scores or changes represent better results.",
      "id": "L_SDMT_07_F",
      "shell": "",
      "title": "Listing of Symbol Digit Modalities Test (SDMT) score  score data",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSDMT",
      "description": null
    },
    {
      "Footnote": "A score of 10 indicates very  severe fatigue.",
      "id": "T_PCGI_01_F",
      "shell": "LAYCAT001",
      "title": "Patientâ€™s Global Impression of Severity (PGI-S) of Fatigue by visit per severity category - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 10 indicates very  severe fatigue.",
      "id": "T_PCGI_02_F",
      "shell": "GE01",
      "title": "Patientâ€™s Global Impression of Severity (PGI-S) of fatigue by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 10 indicates very  severe fatigue.",
      "id": "T_PCGI_03_F",
      "shell": "GE02",
      "title": "Patientâ€™s Global Impression of Severity (PGI-S) of fatigue by visit: Changes from baseline  - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 10 indicates very  severe fatigue.",
      "id": "F_PCGI_04_F",
      "shell": "FIGFREQDIST01",
      "title": "Patientâ€™s Global Impression of Severity (PGI-S) of fatigue: Frequency distribution by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 10 indicates very  severe fatigue.",
      "id": "F_PCGI_05_F",
      "shell": "GE03",
      "title": "Patientâ€™s Global Impression of Severity (PGI-S) of fatigue: Changes from baseline by visit (Boxplots)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 7 indicates a very much worsened change in severity of disease compared to baseline whereas a score of 1|indicates very much imporoved change.",
      "id": "T_PCGI_06_F",
      "shell": "LAYCAT001",
      "title": "Clinicianâ€™s Global Impression of Change (CGI-C) of patientâ€™s relapsing MS by visit up to Week 108 per severity category - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 7 indicates a very much worsened change in severity of disease compared to baseline where|as a score of 1 indicates a very much imporvment.",
      "id": "T_PCGI_07_F",
      "shell": "GE01",
      "title": "Clinicianâ€™s Global Impression of Change (CGI-C) of patientâ€™s relapsing MS by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 7 indicates a very much worsened change in severity of disease compared to baseline where as a score of 1|indicates a very much imporvment.",
      "id": "F_PCGI_08_F",
      "shell": "FIGFREQDIST02",
      "title": "Clinicianâ€™s Global Impression of Change (CGI-C) of patientâ€™s relapsing MS of fatigue: Frequency distribution by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 7 indicates a very much worsened change in severity of disease compared to baseline where as a score of 1|indicates a very much imporvment.",
      "id": "F_PCGI_09_F",
      "shell": "GE03",
      "title": "Clinicianâ€™s Global Impression of Change (CGI-C) of patientâ€™s relapsing MS of fatigue by visit (Boxplots)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "A score of 7 indicates a very much worsened change in severity of disease compared to baseline where as a score of 1|indicates a very much imporvment.",
      "id": "L_PCGI_10_F",
      "shell": "",
      "title": "Listing of Patientâ€™s Global Impression of fatigue severity (PGI-S) and Clinicianâ€™s Global Impression of Change (CGI-C) data",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADPCGI",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health,|VT- Vitality, SF- Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm|based)",
      "id": "T_SF36_01_F",
      "shell": "GE01",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain and Summary Scores by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health,|VT- Vitality, SF- Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm|based)|Positive change in scores denotes improvement in health status",
      "id": "T_SF36_02_F",
      "shell": "GE02",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Changes from baseline by visit - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health,|VT- Vitality, SF- Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm|based)|LOCF: Last Observation Carried Forward",
      "id": "T_SF36_03_F",
      "shell": "GE01",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS  by visit (LOCF) - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health,|VT- Vitality, SF- Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm|based)|LOCF: Last Observation Carried Forward|Positive change in scores denotes improvement in health status",
      "id": "T_SF36_04_F",
      "shell": "GE02",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Changes from baseline by visit (LOCF) - Descriptive statistics",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health, VT- Vitality, SF-|Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm based)|SE = Standard error of mean|LOCF: Last Observation Carried Forward|Positive change in scores denotes improvement in health status",
      "id": "F_SF36_05_F",
      "shell": "FIGMULT001",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Mean (+/- SE) changes from baseline to Week 12 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health, VT- Vitality, SF-|Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm based)|SE = Standard error of mean|LOCF: Last Observation Carried Forward|Positive change in scores denotes improvement in health status",
      "id": "F_SF36_06_F",
      "shell": "FIGMULT001",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Mean (+/- SE) changes from baseline to Week 24 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health, VT- Vitality, SF-|Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm based)|SE = Standard error of mean|LOCF: Last Observation Carried Forward|Positive change in scores denotes improvement in health status",
      "id": "F_SF36_07_F",
      "shell": "FIGMULT001",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Mean (+/- SE) changes from baseline to Week 60 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health, VT- Vitality, SF-|Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm based)|SE = Standard error of mean|LOCF: Last Observation Carried Forward|Positive change in scores denotes improvement in health status",
      "id": "F_SF36_08_F",
      "shell": "FIGMULT001",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Mean (+/- SE) changes from baseline to Week 84 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health, VT- Vitality, SF-|Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm based)|SE = Standard error of mean|LOCF: Last Observation Carried Forward|Positive change in scores denotes improvement in health status",
      "id": "F_SF36_09_F",
      "shell": "FIGMULT001",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Mean (+/- SE) changes from baseline to Week 108 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health, VT- Vitality, SF-|Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm based)|SE = Standard error of mean|Positive change in scores denotes improvement in health status",
      "id": "F_SF36_10_F",
      "shell": "FIGLINE004",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Mean (+/- SE) changes from baseline by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "Domain Scores: PF - Physical Functioning, RP-Role Physical,  BP- Bodily Pain, GH- General Health, VT- Vitality, SF-|Social Functionning, RE- Role Emotional, MH- Mental Health|Summary Scores: Physical Component Summary (PCS norm based), Mental Component Summary (MCS norm based)|SE = Standard error of mean|LOCF: Last Observation Carried Forward|Positive change in scores denotes improvement in health status",
      "id": "F_SF36_11_F",
      "shell": "FIGLINE004",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2): Domain scores, PCS and MCS: Mean (+/- SE) changes from baseline by visit (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_SF36_12_F",
      "shell": "LAYCAT003",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "LOCF: Last Observation Carried Forward",
      "id": "T_SF36_13_F",
      "shell": "LAYCAT003",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item by visit (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_SF36_14_F",
      "shell": "LAYSHIFT002",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item: Shift from baseline to Week 60",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_SF36_15_F",
      "shell": "LAYSHIFT002",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item: Shift from baseline to Week 60 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_SF36_16_F",
      "shell": "LAYSHIFT002",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item: Shift from baseline to Week 108",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "LOCF: Last Observation Carried Forward",
      "id": "T_SF36_17_F",
      "shell": "LAYSHIFT002",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item: Shift from baseline to Week 108 (LOCF)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "",
      "id": "T_SF36_18_F",
      "shell": "LAYSHIFT002",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item: Shift from Week 60 to Week 108",
      "population": "Deleted",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "LOCF: Last Observation Carried Forward",
      "id": "T_SF36_19_F",
      "shell": "LAYSHIFT002",
      "title": "Quality of life 36-item Short Form Health Survey (SF-36v2) Health transition item: Shift from Week 60 to Week 108 (LOCF)",
      "population": "Deleted",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "*=Baseline Value, **=Last Value on Treatment. PCS=Physical Component Summary measure, MSC=Mental Component Summary|measure.\n",
      "id": "L_SF36_20_F",
      "shell": "PR01",
      "title": "Listings of Quality of life domain and summary scores based on the 36-item Short Form Health Survey (SF-36v2) Questionnaire",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_SF36_21_F",
      "shell": "PR02",
      "title": "Listings of Quality of life item scores based on the 36-item Short Form Health Survey (SF-36v2) Questionnaire",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "",
      "id": "L_SF36_22_",
      "shell": "PR03",
      "title": "Listings of Quality of life item scores definitions (SF-36v2)",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADSF36",
      "description": null
    },
    {
      "Footnote": "MS: Multiple Sclerosis|MS: Multiple Sclerosis|The percentages are based on n.",
      "id": "T_WPAI_01_F",
      "shell": "LAYCAT003",
      "title": "Work productivity and activity impairment (WPAI:MS): Subjects currently employed by visit",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADWPAI",
      "description": null
    },
    {
      "Footnote": "MS: Multiple Sclerosis |MS: Multiple Sclerosis",
      "id": "T_WPAI_02_F",
      "shell": "GE01",
      "title": "Work productivity and activity impairment (WPAI:MS) scores:  by outcome measure",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADWPAI",
      "description": null
    },
    {
      "Footnote": "MS: Multiple Sclerosis|MS: Multiple Sclerosis",
      "id": "T_WPAI_03_F",
      "shell": "GE02",
      "title": "Work productivity and activity impairment (WPAI:MS) scores: Change from baseline by visit, by outcome measure",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADWPAI",
      "description": null
    },
    {
      "Footnote": "MS: Multiple Sclerosis, SE = Standard error of mean|MS: Multiple Sclerosis",
      "id": "F_WPAI_04_F",
      "shell": "FIGLINE004",
      "title": "Work productivity and activity impairment (WPAI:MS) scores: Mean (+- SE) change from baseline by visit, and by outcome measure",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADWPAI",
      "description": null
    },
    {
      "Footnote": "WPAI:MS Version2.0      |MS: Multiple Sclerosis",
      "id": "L_WPAI_05_F",
      "shell": "",
      "title": "Listing of Work productivity and activity impairment (WPAI:MS) data",
      "population": "Full Analysis Set",
      "Pgmer": "",
      "domain": "ADWPAI",
      "description": null
    },
    {
      "Footnote": "eC-SSRS=Electronic self-rated version of the Columbia-Suicide Severity Rating Scale|includes only pre-treatmentasessments conducted prior to study treatment start.",
      "id": "T_ECRSS_01_S",
      "shell": "SUIC01",
      "title": "Subjects with suicidal ideation, suicidal behavior, or self-injurious behavior without suicidal intent based on the eC-SSRS: Pre-treatment lifetime and recent history  asessments",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADECRSS",
      "description": null
    },
    {
      "Footnote": "eC-SSRS=Electronic self-rated version of the Columbia-Suicide Severity Rating Scale|Includes subjects with at least one valid post-baseline asessment in the respective period.",
      "id": "T_ECRSS_02_S",
      "shell": "SUIC01",
      "title": "Subjects with suicidal ideation, suicidal behavior, or self-injurious behavior without suicidal intent based on the eC-SSRS up to EOT + 15 days",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADECRSS",
      "description": null
    },
    {
      "Footnote": "eC-SSRS=Electronic self-rated version of the Columbia-Suicide Severity Rating Scale|The percentages are based on Nn = subjects with baseline (pre-treatment recent history result) and|at least one post-baseline for suicidal ideation / behaviour result. Subjects are counted only once|in the worst category.",
      "id": "T_ECRSS_03_S",
      "shell": "SUIC02",
      "title": "Suicideal ideation and suicidal behavior based on the eC-SSRS: Shifts from baseline to the worst reported outcome up to EOT + 15 days",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADECRSS",
      "description": null
    },
    {
      "Footnote": "eC-SSRS Version 2.0",
      "id": "L_ECRSS_04_S",
      "shell": "",
      "title": "Listing of Electronic self-rated version of the Columbia-Suicide Severity Rating Scale (eC-SSRS)",
      "population": "Safety Set",
      "Pgmer": "",
      "domain": "ADECRSS",
      "description": null
    },
    {
      "Footnote": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX100XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX200XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX300XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX400XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX500XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX600XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX700XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX800XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX900XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1000XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1100XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1200XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1300",
      "id": "",
      "shell": "",
      "title": "",
      "population": "",
      "Pgmer": "",
      "domain": "AD",
      "description": null
    }
  ]
