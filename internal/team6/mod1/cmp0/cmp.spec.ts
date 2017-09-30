
import { Cmp8610Component } from './cmp';
describe('Cmp8610Component', () => {
  it('should add', () => {
    expect(new Cmp8610Component().add8610(1)).toBe(8611);
  });
});