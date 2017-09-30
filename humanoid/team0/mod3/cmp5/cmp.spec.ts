
import { Cmp7035Component } from './cmp';
describe('Cmp7035Component', () => {
  it('should add', () => {
    expect(new Cmp7035Component().add7035(1)).toBe(7036);
  });
});