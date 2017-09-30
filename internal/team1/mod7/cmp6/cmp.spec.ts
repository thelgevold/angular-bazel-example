
import { Cmp8176Component } from './cmp';
describe('Cmp8176Component', () => {
  it('should add', () => {
    expect(new Cmp8176Component().add8176(1)).toBe(8177);
  });
});