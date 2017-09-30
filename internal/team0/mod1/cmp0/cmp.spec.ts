
import { Cmp8010Component } from './cmp';
describe('Cmp8010Component', () => {
  it('should add', () => {
    expect(new Cmp8010Component().add8010(1)).toBe(8011);
  });
});