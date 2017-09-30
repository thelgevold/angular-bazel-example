
import { Cmp6272Component } from './cmp';
describe('Cmp6272Component', () => {
  it('should add', () => {
    expect(new Cmp6272Component().add6272(1)).toBe(6273);
  });
});