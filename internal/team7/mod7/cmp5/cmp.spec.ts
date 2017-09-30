
import { Cmp8775Component } from './cmp';
describe('Cmp8775Component', () => {
  it('should add', () => {
    expect(new Cmp8775Component().add8775(1)).toBe(8776);
  });
});