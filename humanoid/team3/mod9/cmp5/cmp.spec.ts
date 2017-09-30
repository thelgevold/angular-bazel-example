
import { Cmp7395Component } from './cmp';
describe('Cmp7395Component', () => {
  it('should add', () => {
    expect(new Cmp7395Component().add7395(1)).toBe(7396);
  });
});