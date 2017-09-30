
import { Cmp8482Component } from './cmp';
describe('Cmp8482Component', () => {
  it('should add', () => {
    expect(new Cmp8482Component().add8482(1)).toBe(8483);
  });
});