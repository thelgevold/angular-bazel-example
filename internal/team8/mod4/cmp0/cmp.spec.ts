
import { Cmp8840Component } from './cmp';
describe('Cmp8840Component', () => {
  it('should add', () => {
    expect(new Cmp8840Component().add8840(1)).toBe(8841);
  });
});