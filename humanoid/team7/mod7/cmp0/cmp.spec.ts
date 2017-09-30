
import { Cmp7770Component } from './cmp';
describe('Cmp7770Component', () => {
  it('should add', () => {
    expect(new Cmp7770Component().add7770(1)).toBe(7771);
  });
});