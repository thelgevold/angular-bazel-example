
import { Cmp7299Component } from './cmp';
describe('Cmp7299Component', () => {
  it('should add', () => {
    expect(new Cmp7299Component().add7299(1)).toBe(7300);
  });
});