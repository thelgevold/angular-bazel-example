
import { Cmp8044Component } from './cmp';
describe('Cmp8044Component', () => {
  it('should add', () => {
    expect(new Cmp8044Component().add8044(1)).toBe(8045);
  });
});