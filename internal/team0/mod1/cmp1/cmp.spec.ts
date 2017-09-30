
import { Cmp8011Component } from './cmp';
describe('Cmp8011Component', () => {
  it('should add', () => {
    expect(new Cmp8011Component().add8011(1)).toBe(8012);
  });
});