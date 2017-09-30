
import { Cmp8265Component } from './cmp';
describe('Cmp8265Component', () => {
  it('should add', () => {
    expect(new Cmp8265Component().add8265(1)).toBe(8266);
  });
});