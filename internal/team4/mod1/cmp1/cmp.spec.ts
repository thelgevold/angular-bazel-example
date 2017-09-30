
import { Cmp8411Component } from './cmp';
describe('Cmp8411Component', () => {
  it('should add', () => {
    expect(new Cmp8411Component().add8411(1)).toBe(8412);
  });
});