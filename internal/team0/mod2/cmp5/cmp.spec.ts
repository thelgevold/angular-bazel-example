
import { Cmp8025Component } from './cmp';
describe('Cmp8025Component', () => {
  it('should add', () => {
    expect(new Cmp8025Component().add8025(1)).toBe(8026);
  });
});