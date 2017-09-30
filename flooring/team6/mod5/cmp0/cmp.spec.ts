
import { Cmp5650Component } from './cmp';
describe('Cmp5650Component', () => {
  it('should add', () => {
    expect(new Cmp5650Component().add5650(1)).toBe(5651);
  });
});