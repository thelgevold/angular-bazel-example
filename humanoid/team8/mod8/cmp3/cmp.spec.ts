
import { Cmp7883Component } from './cmp';
describe('Cmp7883Component', () => {
  it('should add', () => {
    expect(new Cmp7883Component().add7883(1)).toBe(7884);
  });
});