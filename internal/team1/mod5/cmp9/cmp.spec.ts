
import { Cmp8159Component } from './cmp';
describe('Cmp8159Component', () => {
  it('should add', () => {
    expect(new Cmp8159Component().add8159(1)).toBe(8160);
  });
});