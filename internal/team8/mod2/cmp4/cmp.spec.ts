
import { Cmp8824Component } from './cmp';
describe('Cmp8824Component', () => {
  it('should add', () => {
    expect(new Cmp8824Component().add8824(1)).toBe(8825);
  });
});