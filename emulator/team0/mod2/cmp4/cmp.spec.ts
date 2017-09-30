
import { Cmp4024Component } from './cmp';
describe('Cmp4024Component', () => {
  it('should add', () => {
    expect(new Cmp4024Component().add4024(1)).toBe(4025);
  });
});