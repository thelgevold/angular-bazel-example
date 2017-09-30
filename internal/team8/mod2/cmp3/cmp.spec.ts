
import { Cmp8823Component } from './cmp';
describe('Cmp8823Component', () => {
  it('should add', () => {
    expect(new Cmp8823Component().add8823(1)).toBe(8824);
  });
});