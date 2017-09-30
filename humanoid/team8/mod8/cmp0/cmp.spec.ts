
import { Cmp7880Component } from './cmp';
describe('Cmp7880Component', () => {
  it('should add', () => {
    expect(new Cmp7880Component().add7880(1)).toBe(7881);
  });
});