
import { Cmp8372Component } from './cmp';
describe('Cmp8372Component', () => {
  it('should add', () => {
    expect(new Cmp8372Component().add8372(1)).toBe(8373);
  });
});