import {renderTemplate, RenderPosition} from './render.js';
import { createNavigationTemplate } from './view/navigation-view.js';
import { createFiltersTemplate } from './view/filters-view.js';
import { createSortingTemplate } from './view/sorting-view.js';
import { createEventsListTemplate } from './view/events-list-view.js';
import { createEditPointTemplate } from './view/edit-point-view.js';
import { createPointTemplate } from './view/point-view.js';
import { createTripInfoTemplate } from './view/trip-info-view.js';

const POINT_COUNT = 3;

const bodyElement = document.body;
const tripMainElement = bodyElement.querySelector('.trip-main');
renderTemplate(tripMainElement, createTripInfoTemplate(), RenderPosition.AFTERBEGIN);

const navigationElement = tripMainElement.querySelector('.trip-controls__navigation');
renderTemplate(navigationElement, createNavigationTemplate(), RenderPosition.BEFOREEND);

const filtersElement = tripMainElement.querySelector('.trip-controls__filters');
renderTemplate(filtersElement, createFiltersTemplate(), RenderPosition.BEFOREEND);

const mainPageElement = bodyElement.querySelector('.page-main');
const eventsElement = mainPageElement.querySelector('.trip-events');

renderTemplate(eventsElement, createSortingTemplate(), RenderPosition.BEFOREEND);
renderTemplate(eventsElement, createEventsListTemplate(), RenderPosition.BEFOREEND);

const eventsListElement = eventsElement.querySelector('.trip-events__list');
renderTemplate(eventsListElement, createEditPointTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < POINT_COUNT; i++) {
  renderTemplate(eventsListElement, createPointTemplate(), RenderPosition.BEFOREEND);
}
