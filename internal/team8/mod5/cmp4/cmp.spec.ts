
import { Cmp8854Component } from './cmp';
describe('Cmp8854Component', () => {
  it('should add', () => {
    expect(new Cmp8854Component().add8854(1)).toBe(8855);
  });
});