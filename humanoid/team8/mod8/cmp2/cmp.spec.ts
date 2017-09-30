
import { Cmp7882Component } from './cmp';
describe('Cmp7882Component', () => {
  it('should add', () => {
    expect(new Cmp7882Component().add7882(1)).toBe(7883);
  });
});