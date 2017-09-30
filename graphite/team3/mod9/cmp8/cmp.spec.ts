
import { Cmp6398Component } from './cmp';
describe('Cmp6398Component', () => {
  it('should add', () => {
    expect(new Cmp6398Component().add6398(1)).toBe(6399);
  });
});