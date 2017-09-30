
import { Cmp7488Component } from './cmp';
describe('Cmp7488Component', () => {
  it('should add', () => {
    expect(new Cmp7488Component().add7488(1)).toBe(7489);
  });
});