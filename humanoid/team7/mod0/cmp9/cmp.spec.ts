
import { Cmp7709Component } from './cmp';
describe('Cmp7709Component', () => {
  it('should add', () => {
    expect(new Cmp7709Component().add7709(1)).toBe(7710);
  });
});