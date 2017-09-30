
import { Cmp8618Component } from './cmp';
describe('Cmp8618Component', () => {
  it('should add', () => {
    expect(new Cmp8618Component().add8618(1)).toBe(8619);
  });
});