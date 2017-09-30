
import { Cmp7913Component } from './cmp';
describe('Cmp7913Component', () => {
  it('should add', () => {
    expect(new Cmp7913Component().add7913(1)).toBe(7914);
  });
});