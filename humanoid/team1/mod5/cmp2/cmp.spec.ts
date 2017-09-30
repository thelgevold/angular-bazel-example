
import { Cmp7152Component } from './cmp';
describe('Cmp7152Component', () => {
  it('should add', () => {
    expect(new Cmp7152Component().add7152(1)).toBe(7153);
  });
});