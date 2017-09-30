
import { Cmp7303Component } from './cmp';
describe('Cmp7303Component', () => {
  it('should add', () => {
    expect(new Cmp7303Component().add7303(1)).toBe(7304);
  });
});