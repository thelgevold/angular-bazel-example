
import { Cmp6271Component } from './cmp';
describe('Cmp6271Component', () => {
  it('should add', () => {
    expect(new Cmp6271Component().add6271(1)).toBe(6272);
  });
});