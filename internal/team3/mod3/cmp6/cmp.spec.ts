
import { Cmp8336Component } from './cmp';
describe('Cmp8336Component', () => {
  it('should add', () => {
    expect(new Cmp8336Component().add8336(1)).toBe(8337);
  });
});