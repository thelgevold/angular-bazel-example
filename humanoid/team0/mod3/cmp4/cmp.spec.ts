
import { Cmp7034Component } from './cmp';
describe('Cmp7034Component', () => {
  it('should add', () => {
    expect(new Cmp7034Component().add7034(1)).toBe(7035);
  });
});