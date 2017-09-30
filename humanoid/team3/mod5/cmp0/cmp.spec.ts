
import { Cmp7350Component } from './cmp';
describe('Cmp7350Component', () => {
  it('should add', () => {
    expect(new Cmp7350Component().add7350(1)).toBe(7351);
  });
});