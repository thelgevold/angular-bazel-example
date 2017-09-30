
import { Cmp7061Component } from './cmp';
describe('Cmp7061Component', () => {
  it('should add', () => {
    expect(new Cmp7061Component().add7061(1)).toBe(7062);
  });
});