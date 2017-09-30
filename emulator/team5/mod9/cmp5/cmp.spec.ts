
import { Cmp4595Component } from './cmp';
describe('Cmp4595Component', () => {
  it('should add', () => {
    expect(new Cmp4595Component().add4595(1)).toBe(4596);
  });
});