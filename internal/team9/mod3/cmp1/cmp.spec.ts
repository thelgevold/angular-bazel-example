
import { Cmp8931Component } from './cmp';
describe('Cmp8931Component', () => {
  it('should add', () => {
    expect(new Cmp8931Component().add8931(1)).toBe(8932);
  });
});