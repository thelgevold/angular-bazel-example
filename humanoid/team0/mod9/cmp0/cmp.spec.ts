
import { Cmp7090Component } from './cmp';
describe('Cmp7090Component', () => {
  it('should add', () => {
    expect(new Cmp7090Component().add7090(1)).toBe(7091);
  });
});