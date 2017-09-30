
import { Cmp8571Component } from './cmp';
describe('Cmp8571Component', () => {
  it('should add', () => {
    expect(new Cmp8571Component().add8571(1)).toBe(8572);
  });
});