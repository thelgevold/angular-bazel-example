
import { Cmp7437Component } from './cmp';
describe('Cmp7437Component', () => {
  it('should add', () => {
    expect(new Cmp7437Component().add7437(1)).toBe(7438);
  });
});