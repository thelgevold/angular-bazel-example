
import { Cmp7534Component } from './cmp';
describe('Cmp7534Component', () => {
  it('should add', () => {
    expect(new Cmp7534Component().add7534(1)).toBe(7535);
  });
});