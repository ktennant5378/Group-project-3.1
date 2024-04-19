Our Group decided to work on the topic which focused on the Crimes in Los Angeles. 
Requirements:
https://www.kaggle.com/datasets/chaitanyakck/crime-data-from-2020-to-present - This is the website that we got the information from. 
Flask - is a micro web framework written in Python. Flask does not include any tools or libraries, that is why it is classified as a microframework. 
SQL ETL - SQL stands for the Structured Query Language and ETL stands for Export, Transform and Load. ETL extracts the data from various sources, transforms the data using business logic, and loads the transformed data into target database table(s). 

CSV cleanup - Cleaning the CSV files is the first key step in preparing the data for import / machine learning. It involves identifying duplicates, correcting invalid values or formats, removing redundant columns, handling outlier data using statistical methods and such.

**Data Ethics **
In regards to data ethics, LA's crime statistics have been meticulously anonymized to safeguard the identities of individuals involved, ensuring that there is no way to trace back any piece of data to a specific person. This is paramount, as the misuse of such data could lead to harm or discrimination against individuals or groups. Never did we have access to personal identifiers for both victims and one committing the crime. Furthermore, the representation of various races in crime statistics must be handled with extreme sensitivity to avoid reinforcing negative stereotypes that could contribute to the stigmatization of certain communities. This data mustn't be used to draw broad conclusions about the propensity of crime within different racial groups, which could have damaging community impacts, such as unwarranted scrutiny or marginalization. Users of the dataset must approach their analyses with a critical eye toward these biases and consider the real-world implications their interpretations may have on the communities represented.

Transform the clean data into the data folder:
I opened the VS code app and started importing the dependencies, 
I read in the data from the excel file using pandas. 
I also converted the data into a data frame using the df = pd.DataFrame(data). 
I worked with the table that includes the DR_NO, Date Rptd, Date Occ, Time Occ. 
Then I did some cleaning of the data, got ride of the Nan values, dropped the duplicate DR_NO. 
I got rid of the age 0 and also got rid of the black gender ('-'). 
I also worked with the Date Columns (total 28 columns) table. 
Then, I converted the Date OCC to datetime. 


![image](https://github.com/ktennant5378/Group-project-3/assets/153492014/6276ebcb-52a3-4eb7-b662-609ecf4a3850)



Crime report over the years. Bonus October Analysis.
I access the dt accessor on the Series, not the DataFrame and I got the Date Occurrence table as a result.
I did some counting of the crime of each month, I took the crime count average of each month from the year 2020. The data was then ready to be displayed. 
I plotted the graph using Matplotlib, I analyzed the Crime Count by Month for the 4 years - 2020, 2021, 2022 and 2023. The plot displayed drastic changes. The plot had peaks in the month of October during all the 4 years. 
![image](https://github.com/ktennant5378/Group-project-3/assets/153463563/8ffd768f-ec03-42c1-930d-f5cb72475f8d)

I did a value count for each year, reset the index, did some renaming of the columns to be more descriptive and printed a DataFrame. I got the Date and the Crime Count table as a result. I plotted a graph using the DataFrame. The title of the plot is Daily Crime Count for October 2023 from 10/1/2023 to 11/1/2023. 

Top 10 Crimes committed in LA. 
I created a DataFrame (top_crime_df) that contains the top 10 crimes. 
I plotted the graph for the Top 10 Crimes in Los Angeles. 
I created a Dataframe that excludes the top 10 crimes, we are focusing on the Crime and Count columns. 

Machine Learning (ML) - a branch of artificial intelligence (AI) that involves building algorithms and statistical models, computers are able to learn from data and do the tasks without instructions. 
![image](https://github.com/ktennant5378/Group-project-3/assets/153463563/1532e9d2-5051-4d86-bc97-4b3e8b272be4)
